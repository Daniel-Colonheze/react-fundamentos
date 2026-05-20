import Image from "next/image"

export default function Flutuante(){

    return(
                       
        <div className="border">

            <Image         //vai para direita
                className="float-rigth m-2"
                src="/public/globe.svg"
                alt="teste"
                width={120}
                height={120}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique, laborum tempore explicabo hic, obcaecati, ab sed numquam dolor earum nulla corrupti eligendi. Dolor ex doloremque in cumque quod quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique, laborum tempore explicabo hic, obcaecati, ab sed numquam dolor earum nulla corrupti eligendi. Dolor ex doloremque in cumque quod quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique, laborum tempore explicabo hic, obcaecati, ab sed numquam dolor earum nulla corrupti eligendi. Dolor ex doloremque in cumque quod quas.</p>
            
        </div>

    )

}