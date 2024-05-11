import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface ConfirmModalProps {
  title: string
  description: string
  disabled: boolean
  open: boolean
  children: React.ReactNode
  setOpen: React.Dispatch<boolean>
  onSubmit: () => void
}

const ConfirmModal = ({
  title,
  description,
  disabled,
  open,
  children,
  setOpen,
  onSubmit
}: ConfirmModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button
              variant="ghost"
              disabled={disabled}
            >
              Cancel
            </Button>
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onSubmit}
            disabled={disabled}
          >
            {disabled ? <Loader2 className="animate-spin" /> : <>Continue</>}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmModal