/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import s from "./Splashscreen.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import Fidget from "../../public/images/Fidget.svg";
import Fidget2 from "../../public/images/Fidget2.svg";
import Fidget3 from "../../public/images/Fidget3.svg";
import xImg from "../../public/images/RotateX.svg";
import Xunmnus from "../../public/images/Xunmnus.svg";
import Finalx from "../../public/images/RotateXfinal.svg";
const Loader = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState<any>();
  const [count, setCounter] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      // console.log("tl=", tl);
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  function Circle({
    count,
    children,
    timeline,
    index,
    rotation,
    img,
    onClick,
  }: any) {
    const el: any = useRef<any>(null);
    console.log("count=", count);

    useEffect(() => {
      // add 'right 100px, rotate 360deg' animation to
      // ref={(el: any) => (commonRef.current["defaultScreen"] = el)}
      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 360,
            repeat: 8,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 400),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el} onClick={onClick}>
        <Image className="Circle" src={img} />
      </div>
    );
  }

  function CircleMedium({
    count,
    children,
    timeline,
    index,
    rotation,
    img,
    onClick,
  }: any) {
    const el: any = useRef<any>(null);
    console.log("count=", count);

    useEffect(() => {
      // add 'right 100px, rotate 360deg' animation to
      // ref={(el: any) => (commonRef.current["defaultScreen"] = el)}
      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 360,
            repeat: 8,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 300),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el} onClick={onClick}>
        <Image className="Circle" src={img} />
      </div>
    );
  }
  function CircleFinal({
    count,
    children,
    timeline,
    index,
    rotation,
    img,
    onClick,
  }: any) {
    const el: any = useRef<any>(null);
    console.log("count=", count);

    useEffect(() => {
      // add 'right 100px, rotate 360deg' animation to
      // ref={(el: any) => (commonRef.current["defaultScreen"] = el)}
      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 360,
            repeat: 8,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 300),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el} onClick={onClick}>
        <Image className="Circle" src={img} />
      </div>
    );
  }
  function RotateX({ count, children, timeline, index, rotation, img }: any) {
    const el = useRef(null);
    console.log("count from rotateX =", count);

    useEffect(() => {
      // add 'right 100px, rotate 360deg' animation to
      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 390,
            repeat: 8,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 200),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el}>
        <Image className="Circle" src={img} alt="" />
      </div>
    );
  }
  function RotateXFinal({
    count,
    children,
    timeline,
    index,
    rotation,
    img,
  }: any) {
    const el = useRef(null);
    console.log("count from rotateX =", count);

    useEffect(() => {
      // add 'right 100px, rotate 360deg' animation to
      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 0,
            repeat: 1,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 100),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el}>
        <Image className="Circle" src={img} alt="" />
      </div>
    );
  }
  function Xunus({ count, children, timeline, index, rotation, img }: any) {
    const el = useRef(null);
    // setCounter(count + 1);

    useLayoutEffect(() => {
      // add 'right 100px, rotate 360deg' animation to

      timeline &&
        timeline.to(
          el.current,
          {
            rotate: 0,
            repeat: 4,
            onended: setTimeout(() => {
              setCounter((prev) => prev + 1);
            }, 2 * 1000),
          },
          index * 0.4
        );
    }, [timeline, rotation, index]);

    return (
      <div className="circleContainer" ref={el}>
        <Image className="Circle" src={img} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className={s.container1}>
        <div onClick={() => setReversed(reversed)}>
          {count < 8 ? (
            <Circle
              count={count}
              timeline={tl}
              rotation={360}
              index={1}
              img={Fidget}
            />
          ) : count < 12 ? (
            <CircleFinal
              count={count}
              timeline={tl}
              rotation={360}
              index={1}
              img={Fidget2}
            />
          ) : count < 15 ? (
            <CircleMedium
              count={count}
              timeline={tl}
              rotation={360}
              index={1}
              img={Fidget3}
            />
          ) : count < 18 ? (
            <RotateX
              count={count}
              timeline={tl}
              rotation={360}
              index={1}
              img={xImg}
            />
          ) : count < 21 ? (
            <RotateXFinal
              count={count}
              timeline={tl}
              rotation={360}
              index={1}
              img={Finalx}
            />
          ) : count >= 12 ? (
            <Xunus
              count={count}
              timeline={tl}
              rotation={0}
              index={3}
              img={Xunmnus}
            />
          ) : (
            "null"
          )}
        </div>
      </div>
    </>
  );
};

export default Loader;
