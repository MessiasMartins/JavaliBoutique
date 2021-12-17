import React, { useState } from 'react';
import productsData from '@/data/productsData';
import Card from './Card';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon } from '@heroicons/react/solid'


//import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title,items}) => {

    const [scrollX, setScrollX] = useState(0);

    let avanco = 500

   

    

    //Configurando as setas para rolar os filmes na lista
    const handleLeftArrow = () => {

        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        };
        setScrollX(x)

    }

    const handleRightArrow = () => {

               
        
        let x = scrollX - Math.round(window.innerWidth / 2);

        let listW = productsData.length * 380;        
        
        if(window.innerWidth < 1200){
            listW = productsData.length * 380;
        }        

        if(window.innerWidth < 500){
            listW = productsData.length * 380;
        }

        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            
            <div className="seta-esquerda" onClick={handleLeftArrow}>
                <ChevronLeftIcon className="h-24 w-24 text-gray-400" />
            </div>

            <div className="seta-direita" onClick={handleRightArrow}>
                <ChevronRightIcon className="h-24 w-24 text-gray-400" />
            </div>

            <div className="overflow-x-hidden md:pl-20">

                <div className="roll-5" style={{
                    marginLeft: scrollX,
                    width: productsData.length * avanco,
                }}>

                {productsData.map((produto) => (

                    <div className="inline-block ">
                        <Card                            
                            key={produto.title}
                            title={produto.title}
                            description={produto.description}
                            imgSrc={produto.imgSrc}
                            href={produto.href}
                        />
                    </div>                
                                        
                ))}
                </div>               

            </div>
        </div>
    );
}