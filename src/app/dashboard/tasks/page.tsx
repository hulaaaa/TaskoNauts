'use client'
import { Button, Dialog, Flex, ScrollArea, Text, TextField } from "@radix-ui/themes";
import { IconCirclePlus, IconFilter, IconPlus, IconSort09, IconSortDescending } from "@tabler/icons-react";
import { useState } from "react";

export default function Tasks() {
  const [selectSort, setSelectSort] = useState(0);
  const clickedSort = (index: number) => {
    setSelectSort(index);
  }
  return(
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-10">
          <div className="flex flex-row items-center gap-2 opacity-0">
            <IconFilter style={{opacity:0}}/>
            <h1 className="font-light text-base opacity-0">Filter</h1>
          </div>
          <div className="flex flex-row items-center gap-2 opacity-0">
            <IconSortDescending style={{opacity:0}}/>
            <h1 className="font-light text-base opacity-0">Sort</h1>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          <div data-cursor-pointer onClick={()=>clickedSort(0)}className={
            selectSort==0?
            "flex flex-row items-center justify-center px-3 py-1 bg-white/5 rounded-md":
            "flex flex-row items-center justify-center px-1 py-2"
          }>
            <h1 data-cursor-pointer className="font-light text-base">New Tasks</h1>
          </div>
          <div data-cursor-pointer onClick={()=>clickedSort(1)}className={
            selectSort==1?
            "flex flex-row items-center justify-center px-3 py-1 bg-white/5 rounded-md":
            "flex flex-row items-center justify-center px-1 py-2"
          }>
            <h1 data-cursor-pointer className="font-light text-base">In Progress</h1>
          </div>
          <div data-cursor-pointer onClick={()=>clickedSort(2)}className={
            selectSort==2?
            "flex flex-row items-center justify-center px-3 py-1 bg-white/5 rounded-md":
            "flex flex-row items-center justify-center px-1 py-2"
          }>
            <h1 data-cursor-pointer className="font-light text-base">Completed</h1>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          <div data-cursor-pointer className="flex flex-row items-center gap-2">
            <IconFilter data-cursor-pointer style={{opacity:0.3}}/>
            <h1 data-cursor-pointer className="font-light text-base">Filter</h1>
          </div>
          <div data-cursor-pointer className="flex flex-row items-center gap-2">
            <IconSortDescending data-cursor-pointer style={{opacity:0.3}}/>
            <h1 data-cursor-pointer className="font-light text-base">Sort</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 justify-between gap-5">
        <div className="flex flex-col p-5 border gap-7 border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl z-[5000]" 
          style={{ width: '100%'}}>
          <h1 className="font-medium text-lg">Communicating with client</h1>
          <h1 className="font-light text-base"> Hold an online meeting with the client to discuss the progress of the project. Get feedback and updated information on customer needs.</h1>
          <ScrollArea type="always" scrollbars="vertical" className="flex flex-col" style={{ height: 130 }}>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Get the latest information</h1>
            </div>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Get the latest information</h1>
            </div>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Get the latest information</h1>
            </div>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Get the latest information</h1>
            </div>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Get the latest information</h1>
            </div>
            <div data-cursor-pointer className="flex flex-row items-center mb-3 gap-3">
              <div data-cursor-pointer className="w-5 h-5 rounded-full border-white border-solid border-2"/>
              <h1 data-cursor-pointer className="font-light text-base">Prepare material for discussion</h1>
            </div>
          </ScrollArea>
          <div className="flex flex-row justify-between items-end">
            <div className="flex flex-row items-center gap-3">
              <h1 className="font-thin text-base text-white">Tue, 04/02 - Tuh, 04/04</h1>
            </div>
            <div data-cursor-pointer className="flex items-center justify-center p-4 bg-white rounded-full">
              <svg data-cursor-pointer xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="#000000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                <path data-cursor-pointer stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg>
            </div>
          </div>
        </div>
        <Dialog.Root>
          <Dialog.Trigger>
            <div data-cursor-pointer className="flex items-center justify-center p-5 border border-dashed border-transparent dark:border-white/[0.2] sm:rounded-xl rounded-3xl z-[5000]" 
              style={{ width: '100%'}}>
              <h1 data-cursor-pointer className="flex items-center gap-3 font-medium text-lg"><IconPlus/> add new</h1>
            </div>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px" className="z-[0]">
            <Dialog.Title>Add new task</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Write all input below to add new task
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Root
                  defaultValue="Freja Johnsen"
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Root
                  defaultValue="freja@example.com"
                  placeholder="Enter your email"
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Save</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        
      </div>
    </div>
  )
}