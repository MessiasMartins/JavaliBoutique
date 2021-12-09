import React, { useState } from 'react';
import productsData from '@/data/productsData';
import Card from './Card';
//import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title,items}) => {

    const [scrollX, setScrollX] = useState(0);

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
        let listW = productsData.length * 600;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <a>Esq</a>
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <a>Dir</a>
            </div>

            <div className="overflow-x-hidden p-8">

                <div className="roll-5" style={{
                    marginLeft: scrollX,
                    width: productsData.length * 600,
                }}>

                {productsData.map((produto) => (

                    <div className="inline-block">
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