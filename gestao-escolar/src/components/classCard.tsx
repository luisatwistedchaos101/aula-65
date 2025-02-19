import IClass from "../interface/IClass";

interface IClassCardProps {
    sala: IClass;

}


function ClassCard({ sala }: IClassCardProps) {
    return (
        <div>
            <div>
                <p>{sala.students}/{sala.capacity}</p>
                <strong>
                    {sala.name}
                </strong>
            </div>

            <div>
                <p>{sala.day} - {sala.hour} </p>
            </div>
        </div>
    )
}

export default ClassCard;