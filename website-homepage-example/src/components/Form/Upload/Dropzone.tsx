import { HTMLProps, ReactNode, useCallback } from 'react'
import { Accept, useDropzone } from 'react-dropzone'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form'

interface DropzoneFieldProps<T extends FieldValues>
  extends HTMLProps<HTMLDivElement> {
  name: Path<T>
  control: Control<T>
  children: ReactNode

  customAccept?: Accept
  maxSize?: number
  maxFiles?: number
}

export function DropzoneField<TFieldValues extends FieldValues>({
  name,
  control,
  children,
  customAccept,
  maxSize = 1024 * 1024 * 5,
  maxFiles = 1,
  ...rest
}: DropzoneFieldProps<TFieldValues>) {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone
          data-cy={'dropzone'}
          onChange={(e: any) => onChange(e.target.files[0])}
          name={name}
          accept={customAccept}
          maxSize={maxSize}
          maxFiles={maxFiles}
          {...rest}
        >
          {children}
        </Dropzone>
      )}
      name={name}
      control={control}
    />
  )
}

const Dropzone = ({
  onChange,
  children,
  accept,
  maxSize,
  maxFiles,
  name,
  ...rest
}: {
  onChange: (...event: any[]) => void
  children: ReactNode
  name: string
  accept?: Accept | any
  maxSize?: number
  maxFiles?: number
}) => {
  const { setValue } = useFormContext()
  const onDrop = useCallback(
    (acceptedFiles: any, fileRejections: any) => {
      setValue(
        name,
        { accepted: acceptedFiles, rejected: fileRejections },
        {
          shouldValidate: false,
        },
      )
    },
    [name, setValue],
  )

  let customAccept = accept
  if (!accept) {
    customAccept = { 'image/*': ['.jpg', '.jpeg', '.png', '.pdf'] }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: customAccept as Accept,
    maxSize,
    maxFiles,
    onError: (error) => {
      console.error('Error reading file:', error)
    },
  })
  return (
    <div {...getRootProps()} {...rest}>
      <input {...getInputProps({ onChange })} />
      <div style={{ opacity: isDragActive ? 0.7 : 1 }}>{children}</div>
    </div>
  )
}
