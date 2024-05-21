"use client"
import React from "react";
import { ScrollArea } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import AuctionItem from '@/components/auction/item'
const MyNFT = () => {
     const list = [
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x8888888111122222233444444',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['英式拍卖', 'pleasure', '狂热'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '10ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '0.5ETH',
      tags: ['荷兰拍卖', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '6ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
    {
      img: 'https://i.seadn.io/s/raw/files/0bcb42f07224f4b66642aa7771d9a828.png?auto=format&dpr=1&w=1000',
      price: '1.23ETH',
      tags: ['荷兰拍卖', 'pleasure', '狂热', '慈善'],
      currentBid: '10ETH',
      currentBidder: '0x111112222',
      deadline: '2024-01-01 00:00:00',
    },
  ]
  return (
  <div className="p-5 hover:shadow-lg shadow-md">
      <div className="md:max-w-screen-lg flex-1 ">
        <div className="flex justify-between font-bold text-lg">
          <div>My NFT</div>
          {/* <div className="flex items-center cursor-pointer">
            more
            <ChevronRightIcon className="w-5 h-5" />
          </div> */}
        </div>
        <ScrollArea
          size="1"
          type="always"
          scrollbars="horizontal"
        >
          <div className="flex justify-between ">
            {list.map((e,i) => {
              return <AuctionItem item={e} key={i}/>
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MyNFT;