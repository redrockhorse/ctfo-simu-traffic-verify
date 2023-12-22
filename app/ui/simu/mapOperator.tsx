"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl, { ResourceType } from 'mapbox-gl';
// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
function convertCustomSchemeToHttpUrl(customUrl: string) {
  // http://pgoxm.palmgo.com.cn:23008/palmgoMap/sprite/sprite.json?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InpoYW5nc2FuIiwiZXhwIjo0MTAyMzI5NjAwLCJ1c2VybmFtZSI6InpoYW5nc2FuIn0.m6m_F4ghjI-Zq2uFh7t4zlTfFxWllBuVPK-fPfWaNj8
  // 将 'palmgo://' 替换为 'http://pgoxm.palmgo.com.cn:23008/'
  // http://pgoxm.palmgo.com.cn:23008/palmgogis/API/styles/v1/blueTile?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InpoYW5nc2FuIiwiZXhwIjo0MTAyMzI5NjAwLCJ1c2VybmFtZSI6InpoYW5nc2FuIn0.m6m_F4ghjI-Zq2uFh7t4zlTfFxWllBuVPK-fPfWaNj8
  if (customUrl.startsWith('palmgo://styles')){
    return customUrl.replace('palmgo://styles', 'http://pgoxm.palmgo.com.cn:23008/palmgogis/API/styles/');
  } else {
    return customUrl.replace('palmgo://', 'http://pgoxm.palmgo.com.cn:23008/');
  } 
  // http://pgoxm.palmgo.com.cn:23008/palmgogis/API/styles/v1/blueTile
}
export default function MapOperator() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6InpoYW5nc2FuIiwiZXhwIjo0MTAyMzI5NjAwLCJ1c2VybmFtZSI6InpoYW5nc2FuIn0.m6m_F4ghjI-Zq2uFh7t4zlTfFxWllBuVPK-fPfWaNj8';
      // 初始化地图
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: `palmgo://styles/v1/blueTile?access_token=${mapboxgl.accessToken}`,
        center: [112, 37.94], // starting position
        minZoom: 3,
        maxZoom: 17,
        zoom: 3,
        transformRequest: (url: string, resourceType: ResourceType) => {
          if (url.startsWith('palmgo://')) {
            return {
              url: convertCustomSchemeToHttpUrl(url)
            };
          } else {
            return {
              url // 直接返回原始 URL
            };
          }
        }
      });
      return () => map.remove();
    }
  }, []);
  return (
    <div className="flex-grow w-1/2 bg-blue-500">
      <div id="main-map" ref={mapContainerRef} className="w-full h-full bg-black"></div>
    </div>
  )
}