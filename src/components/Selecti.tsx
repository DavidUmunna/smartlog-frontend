import { useRef } from "react"

export default function Selecti(){
  const inputRef = useRef<HTMLInputElement|null>(null)

  const data = [
    "Tech",
    "Medical",
    "Sports"
  ]

  const openList = () => {
		inputRef.current!.focus();
		inputRef.current!.select()
		console.log('yes')
  }

  return(
	  <div className="w-full h-[500px] flex flex-row items-center justify-center">
		  <button className="text-black border border-black" onClick={openList}>Placeholder</button>

      <input ref={inputRef} className="w-0 h-0 focus:outline-none" list="categories"/>

      <datalist id="categories" className="border border-black">
        {
          data.map((category, index)=>{
            return(
              <option key={index} value={category} className="text-black"/>
            )
          })
        }
      </datalist> 
	  </div>
  )
}