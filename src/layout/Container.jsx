export default function Container({children}) {
  return(
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-104px)]">
      { children }
    </div>
  )
}
