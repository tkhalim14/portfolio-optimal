import React from 'react';
import './background.css';
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <>
      <Particles 
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          collisions: {
            enable: false,
          },
          number: {
            value: 20,
            limit: 200,
            density: {
              enable: true,
              value_area: 400
            }
          },
          color: {
            value: "#a50000"
          },
          shape: {
            stroke: { color: "#000", width: 5 },
            type: "circle",
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.6,
              sync: false
            }
          },
          size: {
            value: 60,
            random: false,
            anim: {
              enable: true,
              speed: 5,
              size_min: 3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 120
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: true,
                force: 120,
                smooth: 30
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 500,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 50,
              size: 100,
              duration: 2,
              opacity: 1,
              speed: 2
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 5
            },
            remove: {
              particles_nb: 3
            }
          }
        },
        backgroundMask: {
          enable: false,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 800,
      }}
    />
    </>
  );
}