"use client"
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { IconCircleMinus, IconSearch } from "@tabler/icons-react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { CanvasRevealEffect } from "../ui/revalChat";
export default function Project() {
  const props = {
    percent: 60,
    colorCircle: "#FFE4DF",
    size: 100,
    stroke: 8,
    colorSlice: "#FF6B00",
    strokeBottom: 8,
    speed: 200,
    cut: 0,
    rotation: -90,
    unit: "%",
    animationOff: false,
    inverse: false,
    round: false,
    number: false,
  };

  return (
    <div className="w-full h-full flex flex-row items-center justify-between gap-3">
      <div className="flex flex-col justify-between" style={{ width: '25%', height: '100%', gap: 12 }}>
        <div className="p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl z-[5000]" style={{ width: '100%', height: 'calc(30% - 6px)' }}>
          <h1 className="font-medium text-lg">Project description</h1>
          <div className="my-3 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
          <p className="font-normal text-m text-white/50">Development of a web platform aimed at providing information about real estate available for sale and rent.</p>
        </div>
        <div className="p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]" style={{ width: '100%', height: 'calc(70% - 6px)' }}>
          <h1 className="font-medium text-lg">Project Progress</h1>
          <div className="my-3 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <h1 className="font-normal text-m">Design</h1>
              <CircularProgressBar {...props} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-normal text-m">Front-End</h1>
              <CircularProgressBar {...props} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-normal text-m">Back-End</h1>
              <CircularProgressBar {...props} />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-normal text-m">QA</h1>
              <CircularProgressBar {...props} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '25%', height: '100%' }}>
        <div className="p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]" style={{ width: '100%', height: '100%' }}></div>
      </div>

      <div className="flex flex-col justify-between" style={{ width: '25%', height: '100%', gap: 12 }}>
        <div className="p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]" style={{ width: '100%', height: 'calc(40% - 6px)' }}></div>
        <div className="p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]" style={{ width: '100%', height: 'calc(60% - 6px)' }}></div>
      </div>
      
      <div className="flex flex-col justify-between p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]" style={{ width: '25%', height: '100%' }}>
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg text-white/15">Team Messenger</h1>
          <IconSearch className="text-white/15" />
        </div>

        <div className="my-3 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />

        <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]">
          <IconCircleMinus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <IconCircleMinus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <IconCircleMinus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <IconCircleMinus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
            </div>
          </AnimatePresence>
          <div className="relative z-20">
            <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
              <Logo />
            </div>
            <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              I&apos;m static and I know it.
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-between p-5 border border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl shadow-md z-[5000]">
          <h1 className="font-medium text-sm text-white/50">nope :(</h1>
          <IconCircleMinus className="text-white/50" />
        </div>
      </div>
    </div>
  );
}
const Logo = () => {
  return (
    <svg width="110" height="50" viewBox="0 0 110 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65.8088 24.2583V16.7213H62.8364V14.9697H70.9308V16.7213H67.9585V24.2583H65.8088ZM70.4 24.2583L74.5403 14.9697H76.6635L80.8168 24.2583H78.561L75.164 16.0578H76.0132L72.603 24.2583H70.4ZM72.4701 22.2679L73.0409 20.6358H77.8179L78.4018 22.2679H72.4701ZM84.8325 24.4176C84.0894 24.4176 83.3772 24.3203 82.6961 24.1256C82.0148 23.9223 81.4664 23.6612 81.0507 23.3427L81.7805 21.7239C82.1786 22.0069 82.6474 22.2414 83.1871 22.4272C83.7355 22.604 84.2884 22.6925 84.8458 22.6925C85.2704 22.6925 85.6108 22.6527 85.8675 22.5731C86.1329 22.4846 86.3274 22.3652 86.4514 22.2148C86.5752 22.0645 86.6371 21.892 86.6371 21.6973C86.6371 21.4496 86.5397 21.2551 86.3452 21.1135C86.1505 20.9632 85.8941 20.8437 85.5756 20.7552C85.2571 20.6579 84.9032 20.5694 84.514 20.4898C84.1336 20.4013 83.7487 20.2952 83.3596 20.1713C82.9791 20.0475 82.6298 19.8883 82.3113 19.6936C81.9928 19.499 81.7318 19.2425 81.5284 18.924C81.3337 18.6055 81.2365 18.1986 81.2365 17.7032C81.2365 17.1724 81.3779 16.6903 81.6611 16.2568C81.953 15.8145 82.3863 15.4651 82.9615 15.2085C83.5454 14.9432 84.2752 14.8105 85.151 14.8105C85.7348 14.8105 86.3098 14.8812 86.876 15.0228C87.442 15.1555 87.9419 15.3589 88.3755 15.6332L87.712 17.2653C87.2784 17.0176 86.8449 16.8363 86.4116 16.7213C85.978 16.5974 85.5534 16.5355 85.1377 16.5355C84.7218 16.5355 84.3813 16.5842 84.1159 16.6815C83.8506 16.7788 83.6602 16.907 83.5454 17.0663C83.4303 17.2167 83.3728 17.3936 83.3728 17.5971C83.3728 17.8359 83.4701 18.0305 83.6648 18.1809C83.8593 18.3225 84.1159 18.4374 84.4344 18.5259C84.7529 18.6144 85.1022 18.7028 85.4827 18.7913C85.8719 18.8798 86.2567 18.9815 86.6371 19.0965C87.0263 19.2115 87.3802 19.3663 87.6987 19.5609C88.0172 19.7556 88.2737 20.0121 88.4683 20.3306C88.6717 20.649 88.7735 21.0515 88.7735 21.5381C88.7735 22.06 88.6276 22.5377 88.3356 22.9712C88.0437 23.4047 87.6058 23.7541 87.022 24.0195C86.4468 24.2849 85.717 24.4176 84.8325 24.4176ZM92.1664 22.1352L92.047 19.6538L96.4922 14.9697H98.8808L94.8734 19.2823L93.6791 20.5562L92.1664 22.1352ZM90.2423 24.2583V14.9697H92.3787V24.2583H90.2423ZM96.5984 24.2583L93.2943 20.2111L94.7009 18.6852L99.1063 24.2583H96.5984ZM104.24 24.4176C103.505 24.4176 102.824 24.2982 102.196 24.0593C101.577 23.8205 101.037 23.4844 100.577 23.0508C100.126 22.6173 99.7721 22.1087 99.5156 21.5248C99.2678 20.941 99.1441 20.304 99.1441 19.614C99.1441 18.924 99.2678 18.2871 99.5156 17.7032C99.7721 17.1194 100.13 16.6107 100.59 16.1772C101.051 15.7437 101.59 15.4076 102.209 15.1687C102.829 14.9299 103.501 14.8105 104.226 14.8105C104.96 14.8105 105.633 14.9299 106.243 15.1687C106.863 15.4076 107.398 15.7437 107.849 16.1772C108.309 16.6107 108.667 17.1194 108.924 17.7032C109.18 18.2782 109.309 18.9151 109.309 19.614C109.309 20.304 109.18 20.9453 108.924 21.5381C108.667 22.122 108.309 22.6305 107.849 23.0641C107.398 23.4887 106.863 23.8205 106.243 24.0593C105.633 24.2982 104.965 24.4176 104.24 24.4176ZM104.226 22.5864C104.642 22.5864 105.022 22.5157 105.367 22.3741C105.721 22.2325 106.031 22.0291 106.296 21.7637C106.562 21.4983 106.765 21.1842 106.907 20.8215C107.057 20.4588 107.132 20.0563 107.132 19.614C107.132 19.1717 107.057 18.7692 106.907 18.4065C106.765 18.0438 106.562 17.7297 106.296 17.4644C106.04 17.199 105.735 16.9955 105.381 16.854C105.027 16.7124 104.642 16.6416 104.226 16.6416C103.811 16.6416 103.426 16.7124 103.072 16.854C102.727 16.9955 102.422 17.199 102.156 17.4644C101.891 17.7297 101.683 18.0438 101.533 18.4065C101.391 18.7692 101.32 19.1717 101.32 19.614C101.32 20.0475 101.391 20.45 101.533 20.8215C101.683 21.1842 101.887 21.4983 102.143 21.7637C102.408 22.0291 102.718 22.2325 103.072 22.3741C103.426 22.5157 103.811 22.5864 104.226 22.5864Z" fill="#F7F7F7"/>
    <path d="M63.8853 37.7351V28.4465H65.6634L71.1437 35.1343H70.2812V28.4465H72.4043V37.7351H70.6394L65.1459 31.0473H66.0084V37.7351H63.8853ZM73.381 37.7351L77.5213 28.4465H79.6444L83.7978 37.7351H81.542L78.145 29.5346H78.9942L75.584 37.7351H73.381ZM75.4511 35.7447L76.0219 34.1126H80.7989L81.3828 35.7447H75.4511ZM88.6938 37.8944C87.3758 37.8944 86.3451 37.5272 85.602 36.793C84.8589 36.0588 84.4874 35.0105 84.4874 33.6481V28.4465H86.6371V33.5685C86.6371 34.4532 86.8185 35.0902 87.1811 35.4793C87.5437 35.8685 88.0525 36.0632 88.7071 36.0632C89.3617 36.0632 89.8705 35.8685 90.2331 35.4793C90.5957 35.0902 90.7771 34.4532 90.7771 33.5685V28.4465H92.9003V33.6481C92.9003 35.0105 92.5287 36.0588 91.7856 36.793C91.0425 37.5272 90.0119 37.8944 88.6938 37.8944ZM96.7932 37.7351V30.1981H93.8208V28.4465H101.915V30.1981H98.9429V37.7351H96.7932ZM106.059 37.8944C105.316 37.8944 104.604 37.7971 103.923 37.6025C103.241 37.3991 102.693 37.138 102.277 36.8196L103.007 35.2007C103.405 35.4837 103.874 35.7182 104.414 35.904C104.962 36.0808 105.515 36.1693 106.072 36.1693C106.497 36.1693 106.837 36.1295 107.094 36.0499C107.359 35.9614 107.554 35.842 107.678 35.6916C107.802 35.5413 107.864 35.3688 107.864 35.1741C107.864 34.9264 107.766 34.7319 107.572 34.5903C107.377 34.44 107.121 34.3205 106.802 34.232C106.484 34.1348 106.13 34.0462 105.741 33.9666C105.36 33.8781 104.975 33.7719 104.586 33.6481C104.206 33.5244 103.856 33.3651 103.538 33.1704C103.219 32.9757 102.958 32.7193 102.755 32.4008C102.56 32.0823 102.463 31.6753 102.463 31.18C102.463 30.6492 102.604 30.1672 102.888 29.7336C103.18 29.2914 103.613 28.9418 104.188 28.6853C104.772 28.42 105.502 28.2873 106.378 28.2873C106.961 28.2873 107.536 28.358 108.103 28.4996C108.669 28.6323 109.168 28.8357 109.602 29.11L108.939 30.7421C108.505 30.4944 108.071 30.3131 107.638 30.1981C107.205 30.0743 106.78 30.0123 106.364 30.0123C105.948 30.0123 105.608 30.061 105.342 30.1583C105.077 30.2555 104.887 30.3838 104.772 30.5431C104.657 30.6934 104.599 30.8705 104.599 31.0739C104.599 31.3127 104.697 31.5074 104.891 31.6577C105.086 31.7993 105.343 31.9142 105.661 32.0027C105.979 32.0913 106.329 32.1796 106.709 32.2681C107.098 32.3566 107.483 32.4582 107.864 32.5733C108.253 32.6884 108.607 32.8431 108.925 33.0377C109.244 33.2324 109.5 33.4889 109.695 33.8074C109.898 34.1258 110 34.5283 110 35.0149C110 35.5368 109.854 36.0145 109.562 36.448C109.27 36.8815 108.832 37.2309 108.249 37.4963C107.673 37.7617 106.944 37.8944 106.059 37.8944Z" fill="#F7F7F7"/>
    <path d="M1.04745 11.5213C-1.9198 6.40701 1.7702 0 7.68293 0H46.8189C51.0558 0 54.4903 3.43462 54.4903 7.67143V31.3757C54.4903 34.1785 52.9621 36.758 50.5039 38.1042L31.2415 48.6535C27.5902 50.6532 23.0103 49.3758 20.9212 45.775L1.04745 11.5213Z" fill="#F7F7F7"/>
    </svg>

  );
};
 