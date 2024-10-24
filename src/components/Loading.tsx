import load from '../../public/assets/loading.gif'
import Image from 'next/image';
export default function Loading(props:any) {
    return (
        <div id={props.id} className="w-full absolute flex justify-center items-center h-full bg-[#000000a8]">
            <div className="border border-black flex justify-center items-center flex-col bg-white w-[300px] h-[300px]">
            <Image src={load} alt='Loadingif' width={150} height={150}></Image>
            <p className='text-3xl font-medium mt-12'>Carregando</p>
            </div>
        </div>
    );
}   