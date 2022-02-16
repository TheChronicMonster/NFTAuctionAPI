'reach 0.1';

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        getSale: Fun([], Object({
            nftId: Token,
            minBid: UInt,
            lenInBlocks: UInt,
        })),
        auctionReady: Fun([], Null),
        seeBid: Fun([Address, UInt], Null),
        showOutcome: Fun([Address, UInt], Null),
    });
    const Bidder = API('Bidder', {
        bid: Fun([UInt], Tuple(Address, UInt)),
    });
    init();

    Creator.only(() => {
        const {nftId, minBid, lenInBlocks} = declassify(interact.getSale());
    });

    // Add consensus steps for Creator

    const end = lastConsensusTime() + lenInBlocks;
    // const [
    //     highestBidder, 
    //     lastPrice,
    //     isFirstBid,
    // ]
    // Add consensus steps for Bidders




});