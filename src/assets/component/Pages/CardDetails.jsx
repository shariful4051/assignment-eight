import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const{id} = useParams()
    const appId =parseInt(id)
    console.log(id);

    const apps =useLoaderData()
    const singleApp = apps.find(app=>app.id ==appId)
    
    return (
        <div>
            <img src={singleApp.image} alt="" />
            <h1>{singleApp.title}</h1>
        </div>
    );
};

export default CardDetails;





// const BookDetails = () => {
//     const {id} = useParams()
//     const bookId = parseInt(id)
//     const data = useLoaderData();
//     const singleBook = data.find(book=>book.bookId ===bookId)
//     console.log(singleBook)
//    // console.log(data);
//     //console.log(id,bookId);
//    const {bookName,image} = singleBook;

//    const handle =(id)=>{
//     addToLs(id)
//    }
//     return (
//         <div>
//             <img className='h-[100px]' src={image} alt="" />
//             <p>{bookName}</p>
//             <button onClick={()=>handle(id)} className='cursor-pointer bg-amber-200 rounded-lg px-3 py-2 text-green-800 font-bold '>Read</button>
//             <button className='ml-2 cursor-pointer bg-amber-200 rounded-lg px-3 py-2 text-green-800 font-bold '>Wish list</button>
//         </div>
//     );