import { FileUp } from 'lucide-react'

export function DropzoneArea() {
  return (
    <div className="w-full border rounded-lg border-zinc-500 border-dashed  p-4 mt-5 flex flex-col items-center justify-center gap-5">
      <FileUp className="w-10 h-10 text-zinc-900" />
      <span className="">
        Arraste e solte o arquivo aqui ou clique para selecionar
      </span>
    </div>
  )
}
