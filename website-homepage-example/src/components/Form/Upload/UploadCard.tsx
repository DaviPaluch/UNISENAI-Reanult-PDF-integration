import { X } from 'lucide-react'
import { DropzoneArea } from './DropzoneArea'
import { DropzoneField } from './Dropzone'

export default function UploadCard() {
  return (
    <div className="w-full items-center gap-2 border rounded-lg border-zinc-300 p-4 shadow-sm">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl">Upload file</p>
        <X />
      </div>

      <DropzoneArea />

      <div></div>
    </div>
  )
}
