
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse mt-[-150px]">
                <div className=''>
                    <div className="carousel w-[700px] h-[500px] ">
                        <div id="slide1" className="carousel-item relative w-full">
                            {/* <img src={bner1} className="w-full" /> */}
                            <img src="https://mcdn.wallpapersafari.com/medium/23/89/CrZFh8.jpg"className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://mcdn.wallpapersafari.com/medium/10/80/jU1xzC.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://mcdn.wallpapersafari.com/medium/98/30/x0p7MC.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://mcdn.wallpapersafari.com/medium/27/17/q3DFB2.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        {/* <div id="slide5" className="carousel-item relative w-full">
                            <img src={bner4} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div data-aos="zoom-out-right">
                    <h1 className="text-4xl font-bold">Magical Toy <span className=''>Mart</span></h1>
                    <p className="py-6">It is a whimsical wonderland of toys, a place where imagination comes to life. Step into this enchanting store and be greeted by shelves overflowing with a vibrant array of playthings. From cuddly stuffed animals to interactive gadgets, from classic board games to cutting-edge toys, Magic Toy Mart has something for every child's interest and age. The atmosphere is filled with excitement and joy as children and parents embark on a journey of exploration, finding treasures that ignite creativity and spark endless hours of play. Magic Toy Mart is a magical destination that brings smiles 
                    to faces and creates lasting memories for children and toy enthusiasts alike.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;