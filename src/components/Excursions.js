import Excursion from './Excursion'

const Excursions = ({excursionList}) => {

    return (
       <div>
        <h2 className='excursionHeading'> Excursions </h2>
        {excursionList.map((excursionList) => (
            <Excursion excursion={excursionList} />
        ))}
        </div>
    )
}

export default Excursions