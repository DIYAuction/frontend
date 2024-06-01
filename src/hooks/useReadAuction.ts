import { useReadContract, useReadContracts } from "wagmi";
import { formatEther, formatUnits } from "viem";
import {
  useMemo,
} from "react";
import { NFTItem } from "@/hooks/useNFT";
import { britisConfig, dutchConfig } from "@/constants";

const useReadAuction = (CurrentNFT:NFTItem) => {
  const isOnAuction = useReadContracts({
    contracts: [
      {
        ...britisConfig,
        functionName: "isOnAuction",
        args: [CurrentNFT.contractAddress, CurrentNFT.tokenId],
      },
      {
        ...dutchConfig,
        functionName: "isOnAuction",
        args: [CurrentNFT.contractAddress, CurrentNFT.tokenId],
      },
    ],
  });
  const {
    isOnAuctionBritish,
    isOnAuctionDutch,
  } = useMemo(
    () => {
      let _isOnAuctionBritish = false;
      let _isOnAuctionDutch = false;
      if (isOnAuction.isSuccess) {
        _isOnAuctionBritish = (isOnAuction.data as any)[0].result;
        _isOnAuctionDutch = (isOnAuction.data as any)[1].result;
      }
      return {
        isOnAuctionBritish: _isOnAuctionBritish,
        isOnAuctionDutch: _isOnAuctionDutch,
      };
    },
    [isOnAuction],
  );
  const auctionIdQueryBritis = useReadContract({
    ...britisConfig,
    functionName: "auctionIdQuery",
    args: [CurrentNFT.contractAddress, Number(CurrentNFT.tokenId)],
    query: {
      enabled: !!isOnAuctionBritish,
    },
  });

  const auctionIdQueryDutch = useReadContract({
    ...dutchConfig,
    functionName: "auctionIdQuery",
    args: [CurrentNFT.contractAddress, Number(CurrentNFT.tokenId)],
    query: {
      enabled: !!isOnAuctionDutch,
    },
  });
  const { auctionIdBritis, auctionIdDutch } = useMemo(() => ({
    auctionIdBritis: auctionIdQueryBritis.data,
    auctionIdDutch: auctionIdQueryDutch.data,
  }), [auctionIdQueryBritis, auctionIdQueryDutch]);

  const auctionsInfoBritisData = useReadContract({
    ...britisConfig,
    functionName: "auctions",
    args: [auctionIdBritis],
    query: {
      enabled: !!auctionIdBritis,
    },
  });

  const auctionsInfoDutchData = useReadContract({
    ...dutchConfig,
    functionName: "auctions",
    args: [auctionIdDutch],
    query: {
      enabled: !!auctionIdDutch,
    },
  });

  const {
    auctionsInfoBritis,
    auctionsInfoDutch,
  } = useMemo(
    () => {
      let _auctionsInfoBritis = {};
      let _auctionsInfoDutch = {

      };
      if (auctionsInfoBritisData.data) {
        const [seller, nftAddress, nftTokenId, startingPrice, currentHighestBid, currentHighestBidder, ended, totalBidAmount, startTime, endTime, interval] = auctionsInfoBritisData.data as any;
        _auctionsInfoBritis = {
          seller, nftAddress, nftTokenId, startingPrice: formatEther(startingPrice), currentHighestBid: formatEther(currentHighestBid), currentHighestBidder, ended, totalBidAmount: formatEther(totalBidAmount), startTime: formatUnits(startTime, 0), endTime: formatUnits(endTime, 0), interval: formatUnits(interval, 0),
        };
      }
      if (auctionsInfoDutchData.data) {
        const [seller, nftAddress, nftTokenId, startingPrice, reservePrice, startTime, endTime, price_decay_interval, price_decay_amount, reserve_duration, isActive] = auctionsInfoDutchData.data as any;
        _auctionsInfoDutch = {
          seller, nftAddress, nftTokenId: formatUnits(nftTokenId, 0), startingPrice: formatEther(startingPrice), reservePrice: formatEther(reservePrice), startTime: formatUnits(startTime, 0), endTime: formatUnits(endTime, 0), price_decay_interval: formatUnits(price_decay_interval, 0), price_decay_amount: formatEther(price_decay_amount), reserve_duration: formatUnits(reserve_duration, 0), isActive,
        };
      }
      console.log("_auctionsInfoDutch;", _auctionsInfoDutch);
      return {
        auctionsInfoBritis: _auctionsInfoBritis,
        auctionsInfoDutch: _auctionsInfoDutch,
      };
    },
    [auctionsInfoBritisData, auctionsInfoDutchData],
  );

  return {
    isOnAuctionBritish,
    isOnAuctionDutch,
    auctionsInfoBritis,
    auctionsInfoDutch,
    auctionIdBritis,
    auctionIdDutch,
  };
};

export default useReadAuction;