import React from 'react'

const Card = () => {
    return (
        <div className="main w-[100%] ">
            <div className="card flex p-1 m-1 w-[50vw] h-max rounded-2xl">
                <div className="left m-[5px] w-[30%] h-[80%]">
                    <img className="rounded-2xl w-[100%] h-[100%] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMo2KrCHXHr5iLfMwa0pkeikbtST6AQsE2w&s" alt="" />
                </div>
                <div className="right w-[55%] p-[5px]">
                    <h2 className="title" >Wanted to open gym near the ground</h2>
                    <p className="discription text-[10px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium praesentium laboriosam id culpa iusto tenetur fuga sunt assumenda vero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero architecto corporis accusantium nostrum nihil exercitationem quisquam delectus omnis dignissimos aspernatur quo accusamus nobis molestias, similique facilis esse? Ullam at similique deserunt laboriosam, nemo, amet autem nobis soluta quo sapiente
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Card
