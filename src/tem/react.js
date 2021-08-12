import React from 'react';

const Reactjs = ({ projects })=>{
return(
    <>
     {projects.map((item1)=>{
                    const {style0,url, id1, image1, description1, title1} = item1;
                return(
                <div key={id1} className={`pro pro-${style0}`}>
                    
                    <div className="pro-img">
                        <img src={image1} alt="" />
                    </div>
                    <div className="pro-det">
                    <div className="pro-title">
                            {title1}
                    </div>
                    <div className="pro-desc">
                        <p>{description1}</p>
                    </div>
                    <div className="pro-link">
                    <form action={url}  target="_blank">
                        <button type='submit' className="pro-btn" >
                            Check it
                        </button>
                    </form>
                    </div>
                
                    </div>
                    </div>
                );
                   })}
                   </>
                );
}

export default Reactjs;