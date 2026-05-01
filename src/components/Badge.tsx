interface BadgeProps {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  )
}
