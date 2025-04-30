interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>{
  id: string
  items: string[]
}

export default function Select(props: Props){
  const { id, items , ...restProps} = props;

  return(
    <select {...restProps} className="flex text-sm px-3 py-2 w-full rounded-md border border-slate-300 mt-1 text-black">
      <option>Select an industry</option>

      {
        items.map((item, index)=>{
          return(
            <option key={`${id}${index}`} value={item.toLowerCase()}>{item}</option>
          )
        })
      }

    </select>
  )
}