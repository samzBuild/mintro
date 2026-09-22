
const ChooseCard = ({animation, heading, para}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 text-center mx-auto'>
        <div className="w-30 h-30 flex justify-center items-center mb-4">
            <img src={animation} alt="" className="w-32" />
        </div>
        <div>
        <h3 className='text-2xl font-bold'> {heading} </h3>
        <p className="text-xl w-64"> {para} </p>
        </div>
    </div>
  )
}

export default ChooseCard