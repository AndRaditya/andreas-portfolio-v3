import { useState } from "react";
import { CountUp } from "use-count-up";

export default function LoadingPage() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className={!loadingComplete ? "loading-page" : "loading-page--after"}>
      <>
        <LoadingTextWrapper
          setLoadingComplete={setLoadingComplete}
          loadingComplete={loadingComplete}
        />
        <LoadingBackdrop loadingComplete={loadingComplete} />
      </>
    </div>
  );
}

function LoadingTextWrapper({ setLoadingComplete, loadingComplete }) {
  return (
    <div className="loading-page__texts">
      <LoadingText
        setLoadingComplete={setLoadingComplete}
        loadingComplete={loadingComplete}
      />
      <LoadingWrapper />
    </div>
  );
}

function LoadingWrapper() {
  return (
    <div className="loading-page__texts--wrapper-loading">
      <p className="text--loading-page__subtitle ">Loading</p>
      <div className="loading-page__texts-loader">
        <div className="loading-page__texts-loader--bar"></div>
      </div>
    </div>
  );
}

function LoadingText({ setLoadingComplete, loadingComplete }) {
  return (
    <div className="loading-page__texts--title text--loading-page__title">
      <CountLoading
        value={100}
        duration={8}
        setLoadingComplete={setLoadingComplete}
        loadingComplete={loadingComplete}
      />
      <span>%</span>
    </div>
  );
}

function CountLoading({ value, duration, setLoadingComplete }) {
  const onComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <CountUp
      isCounting
      end={value}
      duration={duration}
      onComplete={onComplete}
    />
  );
}

function LoadingBackdrop({ loadingComplete }) {
  return (
    <div
      className={
        !loadingComplete
          ? "loading-page__backdrop"
          : "loading-page__backdrop--after"
      }
    ></div>
  );
}
