/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";

const kakao = (window as any).kakao;

function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

}

function Map(){

    useEffect(() => {
        KakaoMapScript();
    }, []);
    
    return (
        <div id='myMap' style={{
            width: '100vw',
            height: '100vh'
        }}></div>
    );
    
}

export default Map;