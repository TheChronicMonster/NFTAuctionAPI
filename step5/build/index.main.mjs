// Automatically generated with Reach 0.1.8 (bf654a17)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (bf654a17)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v171, v172, v189, v190, v191, v192, v193] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v215 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)', 'at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v216 = v215[stdlib.checkedBigNumberify('./index.rsh:36:13:spread', stdlib.UInt_max, 0)];
  const v218 = stdlib.gt(v216, v192);
  stdlib.assert(v218, {
    at: './index.rsh:37:31:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:20:function exp)', 'at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)', 'at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:13:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v171, v172, v189, v190, v191, v192, v193, v215],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v216, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v222], secs: v224, time: v223, didSend: v97, from: v221 } = txn1;
      
      const v226 = v222[stdlib.checkedBigNumberify('./index.rsh:36:13:spread', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v226,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v230 = stdlib.gt(v226, v192);
      stdlib.assert(v230, {
        at: './index.rsh:40:24:application',
        fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
        msg: 'bid is too low',
        who: 'Bidder_bid'
        });
      const v231 = [v190, v192];
      const v232 = await txn1.getOutput('Bidder_bid', 'v231', ctc5, v231);
      
      if (v191) {
        const v406 = v221;
        const v407 = false;
        const v408 = v226;
        const v409 = v223;
        const v411 = stdlib.le(v193, v189);
        if (v411) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v221,
            tok: v172
            });
          sim_r.txns.push({
            amt: v226,
            kind: 'from',
            to: v171,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v172
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          amt: v192,
          kind: 'from',
          to: v190,
          tok: undefined
          });
        const v412 = v221;
        const v413 = false;
        const v414 = v226;
        const v415 = v223;
        const v417 = stdlib.le(v193, v189);
        if (v417) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v221,
            tok: v172
            });
          sim_r.txns.push({
            amt: v226,
            kind: 'from',
            to: v171,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v172
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v222], secs: v224, time: v223, didSend: v97, from: v221 } = txn1;
  const v226 = v222[stdlib.checkedBigNumberify('./index.rsh:36:13:spread', stdlib.UInt_max, 0)];
  ;
  undefined;
  const v230 = stdlib.gt(v226, v192);
  stdlib.assert(v230, {
    at: './index.rsh:40:24:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v231 = [v190, v192];
  const v232 = await txn1.getOutput('Bidder_bid', 'v231', ctc5, v231);
  if (v97) {
    stdlib.protect(ctc6, await interact.out(v222, v232), {
      at: './index.rsh:36:14:application',
      fs: ['at ./index.rsh:36:14:application call to [unknown function] (defined at: ./index.rsh:36:14:function exp)', 'at ./index.rsh:41:23:application call to "notify" (defined at: ./index.rsh:39:13:function exp)', 'at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v191) {
    const v406 = v221;
    const v407 = false;
    const v408 = v226;
    const v409 = v223;
    const v411 = stdlib.le(v193, v189);
    if (v411) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v412 = v221;
    const v413 = false;
    const v414 = v226;
    const v415 = v223;
    const v417 = stdlib.le(v193, v189);
    if (v417) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v167 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:20:73:application',
    fs: ['at ./index.rsh:19:17:application call to [unknown function] (defined at: ./index.rsh:19:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v168 = v167.nftId;
  const v169 = v167.minBid;
  const v170 = v167.lenInBlocks;
  
  const txn1 = await (ctc.sendrecv({
    args: [v168, v169, v170],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v172, v173, v174], secs: v176, time: v175, didSend: v33, from: v171 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v172
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:22:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v172, v173, v174], secs: v176, time: v175, didSend: v33, from: v171 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v171, v172, v173, v174, v175],
    evt_cnt: 0,
    funcNum: 1,
    lct: v175,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:13:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1), v172]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v180, time: v179, didSend: v41, from: v178 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:25:13:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v172
        });
      const v184 = stdlib.addressEq(v171, v178);
      stdlib.assert(v184, {
        at: './index.rsh:25:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      
      const v189 = stdlib.add(v175, v174);
      const v190 = v171;
      const v191 = true;
      const v192 = v173;
      const v193 = v179;
      const v194 = v175;
      
      if (await (async () => {
        const v208 = stdlib.le(v194, v189);
        
        return v208;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v190,
          tok: v172
          });
        if (v191) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v172
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v192,
            kind: 'from',
            to: v171,
            tok: undefined
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v172
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v180, time: v179, didSend: v41, from: v178 } = txn2;
  ;
  ;
  const v184 = stdlib.addressEq(v171, v178);
  stdlib.assert(v184, {
    at: './index.rsh:25:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:26:34:application call to "liftedInteract" (defined at: ./index.rsh:26:34:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v189 = stdlib.add(v175, v174);
  let v190 = v171;
  let v191 = true;
  let v192 = v173;
  let v193 = v179;
  let v194 = v175;
  
  while (await (async () => {
    const v208 = stdlib.le(v194, v189);
    
    return v208;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v189],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v171, v172, v189, v190, v191, v192, v193],
        evt_cnt: 0,
        funcNum: 4,
        lct: v193,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:50:21:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:50:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v250 = stdlib.addressEq(v171, v246);
          stdlib.assert(v250, {
            at: './index.rsh:50:21:dot',
            fs: ['at ./index.rsh:49:41:application call to [unknown function] (defined at: ./index.rsh:49:41:function exp)'],
            msg: 'sender correct',
            who: 'Creator'
            });
          const cv190 = v190;
          const cv191 = v191;
          const cv192 = v192;
          const cv193 = v247;
          const cv194 = v193;
          
          await (async () => {
            const v190 = cv190;
            const v191 = cv191;
            const v192 = cv192;
            const v193 = cv193;
            const v194 = cv194;
            
            if (await (async () => {
              const v208 = stdlib.le(v194, v189);
              
              return v208;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:23:17:decimal', stdlib.UInt_max, 1),
                kind: 'from',
                to: v190,
                tok: v172
                });
              if (v191) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v172
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  amt: v192,
                  kind: 'from',
                  to: v171,
                  tok: undefined
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v172
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc1, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn4;
      ;
      const v250 = stdlib.addressEq(v171, v246);
      stdlib.assert(v250, {
        at: './index.rsh:50:21:dot',
        fs: ['at ./index.rsh:49:41:application call to [unknown function] (defined at: ./index.rsh:49:41:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv190 = v190;
      const cv191 = v191;
      const cv192 = v192;
      const cv193 = v247;
      const cv194 = v193;
      
      v190 = cv190;
      v191 = cv191;
      v192 = cv192;
      v193 = cv193;
      v194 = cv194;
      
      continue;
      }
    else {
      const {data: [v222], secs: v224, time: v223, didSend: v97, from: v221 } = txn3;
      const v226 = v222[stdlib.checkedBigNumberify('./index.rsh:36:13:spread', stdlib.UInt_max, 0)];
      ;
      undefined;
      const v230 = stdlib.gt(v226, v192);
      stdlib.assert(v230, {
        at: './index.rsh:40:24:application',
        fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      const v231 = [v190, v192];
      await txn3.getOutput('Bidder_bid', 'v231', ctc6, v231);
      if (v191) {
        stdlib.protect(ctc3, await interact.seeBid(v221, v226), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:46:40:application call to "liftedInteract" (defined at: ./index.rsh:46:40:application)', 'at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv190 = v221;
        const cv191 = false;
        const cv192 = v226;
        const cv193 = v223;
        const cv194 = v193;
        
        v190 = cv190;
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.seeBid(v221, v226), {
          at: './index.rsh:1:39:application',
          fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:46:40:application call to "liftedInteract" (defined at: ./index.rsh:46:40:application)', 'at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv190 = v221;
        const cv191 = false;
        const cv192 = v226;
        const cv193 = v223;
        const cv194 = v193;
        
        v190 = cv190;
        v191 = cv191;
        v192 = cv192;
        v193 = cv193;
        v194 = cv194;
        
        continue;}}
    
    }
  ;
  if (v191) {
    stdlib.protect(ctc3, await interact.showOutcome(v190, v192), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:56:37:application call to "liftedInteract" (defined at: ./index.rsh:56:37:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v190, v192), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:56:37:application call to "liftedInteract" (defined at: ./index.rsh:56:37:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BSAKAAEEBSggCFFZoI0GJgIBAAAiNQAxGEEDwClkSSJbNQEhBls1AjYaABdJQQAWIjUEIzUGgaCbvIEBEkQ2GgE1BUIAfjYaARc2GgIXNQQ2GgM1BUmBAgxAAUNJgQMMQAE7SSQMQABaJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAgNANXUAEXNAMhB1syBjQDIQhbQgIZSCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMhBVs1/jQDIQRbNf00A1cwIDX8NAMhB1s1+zQDIQhbNfo0BTX5gATXkLTdNPlQsDIGNP0MRDT5FzX4NPhJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINPg0+w1EgAgAAAAAAAAA5zT8NPsWUFCwNPw0+xZQNQc0A1dQARdBABI0/zT+NP0xACI0+DIGNPpCAWM0+0lBAAyxsggjshA0/LIHsyJINP80/jT9MQAiNPgyBjT6QgE+SEkjDEAAfEgjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQVbNf40A4E4WzX9gASai5F0sCNJQQAlNABJIwg1AExLATgSEkQ0/ksBOBESRCRLATgQEkQyCksBOBQSREg0/zEAEkQ0/zT+NP00A4EwWwg0/yM0AyEEWzIGNP1CALtIIjQBEkQ0BEkiEkw0AhIRRDQFIls1/zQFIQZbNf40BYEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESCEJSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESCKxshIkshAyCrIUNP+yEbMiSDEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AjEZIhJEQgDZNf81/jX9Nfw1+zX6Nfk1+DT/NPoOQQAzNPg0+RZQNPoWUDT7UDT8FlEHCFA0/RZQNP4WUChLAVcAYWdIJTUBMgY1AjEZIhJEQgCOI0lBABCxshIkshA0+7IUNPmyEbMiSDT8QQAwIrGyEiSyEDIJshUyCrIUNPmyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZJRJEQgBDNP1JQQAMsbIII7IQNPiyB7MiSCKxshIkshAyCbIVMgqyFDT5shGzIkgisbIII7IQMgmyCTIKsgezIkgxGSUSREIAACk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v172",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v172",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v222",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v231",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v222",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200163b3803806200163b833981016040819052620000269162000282565b6000805543600355604080518251815260208084015180516001600160a01b0316828401529081015182840152820151606082015290517f09dcf99bab8403f2ad96a278879a2e333122fff3ae5cb4798f3c3ab7f7b0fece9181900360800190a162000095341560076200017b565b620000da6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c09093019052815162000172926002920190620001a5565b5050506200036b565b81620001a15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b3906200032e565b90600052602060002090601f016020900481019282620001d7576000855562000222565b82601f10620001f257805160ff191683800117855562000222565b8280016001018555821562000222579182015b828111156200022257825182559160200191906001019062000205565b506200023092915062000234565b5090565b5b8082111562000230576000815560010162000235565b604051606081016001600160401b03811182821017156200027c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029657600080fd5b604080519081016001600160401b0381118282101715620002c757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002e157600080fd5b620002eb6200024b565b60208501519092506001600160a01b03811681146200030957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034357607f821691505b602082108114156200036557634e487b7160e01b600052602260045260246000fd5b50919050565b6112c0806200037b6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f03565b610143565b6100756100bc366004610f03565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f03565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b604051610092929190610f4b565b61011f61011a366004610f85565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611006565b826102df565b5050565b60408051606081018252600060208201818152928201529081526101756101a53684900384018461106b565b826105f7565b60408051606081018252600060208201818152928201529081526101756101d73684900384018461106b565b826107d1565b6000606060005460028080546101f2906110a3565b80601f016020809104026020016040519081016040528092919081815260200182805461021e906110a3565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102ae604080516060810182526000602082018181529282015290815290565b6102b6610d9a565b60408051808201909152602080820186815282528201526102d781836102df565b505192915050565b6102ef600560005414600f610991565b815161030a90158061030357508251600154145b6010610991565b60008080556002805461031c906110a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906110a3565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b50505050508060200190518101906103ad91906110f4565b90506103cf604080516060810182526000602082018181529282015290815290565b6103e0826040015143106011610991565b60408051855181526020808701515151908201527f3097a001c4c75b01a2a0df409ab34fe1576e7fa0902510c53c83db8ce4b686d2910160405180910390a160208401515151610433903414600d610991565b60a08201516020850151515161044b9110600e610991565b606082015181516001600160a01b03909116905260a082015181516020015280516040517f1badf5cc9993f00ad9302df1f67fcdd64af4326ce19cd27f414e0e81f2df3e1c916104b59181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260808201511561053f576104d3610dc7565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c0840151905160800152610539816109b7565b506105f1565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f19350505050158015610580573d6000803e3d6000fd5b50610589610dc7565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526105ef816109b7565b505b50505050565b610607600160005414600b610991565b815161062290158061061b57508251600154145b600c610991565b600080805560028054610634906110a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610660906110a3565b80156106ad5780601f10610682576101008083540402835291602001916106ad565b820191906000526020600020905b81548152906001019060200180831161069057829003601f168201915b50505050508060200190518101906106c591906111a1565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161071334156008610991565b61072d6107263383602001516001610b83565b6009610991565b8051610745906001600160a01b03163314600a610991565b61074d610dc7565b815181516001600160a01b039182169052602080840151835192169101526060820151608083015161077f919061122b565b81516040908101919091528251602080840180516001600160a01b039093169092528151600191015283820151815190920191909152805143606090910152608080840151915101526105f1816109b7565b6107e16005600054146014610991565b81516107fc9015806107f557508251600154145b6015610991565b60008080556002805461080e906110a3565b80601f016020809104026020016040519081016040528092919081815260200182805461083a906110a3565b80156108875780601f1061085c57610100808354040283529160200191610887565b820191906000526020600020905b81548152906001019060200180831161086a57829003601f168201915b505050505080602001905181019061089f91906110f4565b90506108b381604001514310156016610991565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a16108fe34156012610991565b8051610916906001600160a01b031633146013610991565b61091e610dc7565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a086015184519092019190915282514391015260c0840151915101526105f1816109b7565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80516040015160208201516080015111610ae6576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610ae1929190610e1c565b505050565b610b028160000151602001518260200151600001516001610b9b565b80602001516020015115610b295760008080556001819055610b2690600290610ea0565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b6c573d6000803e3d6000fd5b5060008080556001819055610b2690600290610ea0565b6000610b9183853085610baf565b90505b9392505050565b610ba6838383610c89565b610ae157600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c1691611251565b60006040518083038185875af1925050503d8060008114610c53576040519150601f19603f3d011682016040523d82523d6000602084013e610c58565b606091505b5091509150610c6982826001610d5a565b5080806020019051810190610c7e919061126d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610ce891611251565b60006040518083038185875af1925050503d8060008114610d25576040519150601f19603f3d011682016040523d82523d6000602084013e610d2a565b606091505b5091509150610d3b82826002610d5a565b5080806020019051810190610d50919061126d565b9695505050505050565b60608315610d69575081610b94565b825115610d795782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109ae565b905290565b604051806040016040528060008152602001610d9560408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610e28906110a3565b90600052602060002090601f016020900481019282610e4a5760008555610e90565b82601f10610e6357805160ff1916838001178555610e90565b82800160010185558215610e90579182015b82811115610e90578251825591602001919060010190610e75565b50610e9c929150610ed6565b5090565b508054610eac906110a3565b6000825580601f10610ebc575050565b601f016020900490600052602060002090810190610b2691905b5b80821115610e9c5760008155600101610ed7565b600060408284031215610efd57600080fd5b50919050565b600060408284031215610f1557600080fd5b610b948383610eeb565b60005b83811015610f3a578181015183820152602001610f22565b838111156105f15750506000910152565b8281526040602082015260008251806040840152610f70816060850160208701610f1f565b601f01601f1916919091016060019392505050565b600060208284031215610f9757600080fd5b5035919050565b6040805190810167ffffffffffffffff81118282101715610fcf57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610fcf57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561101957600080fd5b611021610f9e565b833581526020601f198301121561103757600080fd5b61103f610fd5565b9150611049610fd5565b602094850135815282529283015250919050565b8015158114610b2657600080fd5b60006040828403121561107d57600080fd5b611085610f9e565b8235815260208301356110978161105d565b60208201529392505050565b600181811c908216806110b757607f821691505b60208210811415610efd57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146110ef57600080fd5b919050565b600060e0828403121561110657600080fd5b60405160e0810181811067ffffffffffffffff8211171561113757634e487b7160e01b600052604160045260246000fd5b604052611143836110d8565b8152611151602084016110d8565b60208201526040830151604082015261116c606084016110d8565b6060820152608083015161117f8161105d565b608082015260a0838101519082015260c0928301519281019290925250919050565b600060a082840312156111b357600080fd5b60405160a0810181811067ffffffffffffffff821117156111e457634e487b7160e01b600052604160045260246000fd5b6040526111f0836110d8565b81526111fe602084016110d8565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000821982111561124c57634e487b7160e01b600052601160045260246000fd5b500190565b60008251611263818460208701610f1f565b9190910192915050565b60006020828403121561127f57600080fd5b8151610b948161105d56fea26469706673582212204ee21a1d8756c1b87fdea2fed32c92f2ed534257d3f6712701b1a51ecbbd68ef64736f6c63430008090033`,
  BytecodeLen: 5691,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
