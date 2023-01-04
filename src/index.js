import React from 'react';
import { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import './styles/main.scss';
import Experience from "./Experience";
import Navigation from './Navigation'
import Header from './Header'
import HideDom from "./HideDom";
import Article from "./Article";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <section className='landing_section'>
          <header>
              <Navigation />
              <Header />
          </header>

          <Suspense
              fallback={
                  <>
                      <HideDom />
                      <div className='loading_screen'>
                              <div className="spinner">
                                  <div className="spinner-item"></div>
                                  <div className="spinner-item"></div>
                              </div>
                      </div>
                  </>
              }>
              <section className={'canvas_container'}>
                  <Canvas
                      className="canvas"
                      camera={ {
                          fov: 45,
                          near: 0.1,
                          far: 200,
                          zoom: 1.5,
                          position: [ - 4, -0.3, 6 ]
                      } }
                      gl={
                          {
                              toneMapping: THREE.LinearToneMapping
                          }
                      }
                      resize={ { scroll: false } }
                  >
                      <Experience />
                  </Canvas>
              </section>
          </Suspense>
      </section>

      <Article />


  </React.StrictMode>
);