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
  
  
  const [v148, v149, v164, v165, v166, v167, v168] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v186 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)', 'at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v187 = v186[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, 0)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v148, v149, v164, v165, v166, v167, v168, v186],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v187, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v192], secs: v194, time: v193, didSend: v93, from: v191 } = txn1;
      
      const v196 = v192[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v196,
        kind: 'to',
        tok: undefined
        });
      undefined;
      const v200 = [v165, v167];
      const v201 = await txn1.getOutput('Bidder_bid', 'v200', ctc5, v200);
      
      if (v166) {
        const v328 = v191;
        const v329 = false;
        const v330 = v196;
        const v331 = v193;
        const v333 = stdlib.le(v168, v164);
        if (v333) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v191,
            tok: v149
            });
          sim_r.txns.push({
            amt: v196,
            kind: 'from',
            to: v148,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v149
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          amt: v167,
          kind: 'from',
          to: v165,
          tok: undefined
          });
        const v334 = v191;
        const v335 = false;
        const v336 = v196;
        const v337 = v193;
        const v339 = stdlib.le(v168, v164);
        if (v339) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v191,
            tok: v149
            });
          sim_r.txns.push({
            amt: v196,
            kind: 'from',
            to: v148,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v149
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
  const {data: [v192], secs: v194, time: v193, didSend: v93, from: v191 } = txn1;
  const v196 = v192[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, 0)];
  ;
  undefined;
  const v200 = [v165, v167];
  const v201 = await txn1.getOutput('Bidder_bid', 'v200', ctc5, v200);
  if (v93) {
    stdlib.protect(ctc6, await interact.out(v192, v201), {
      at: './index.rsh:37:14:application',
      fs: ['at ./index.rsh:37:14:application call to [unknown function] (defined at: ./index.rsh:37:14:function exp)', 'at ./index.rsh:42:23:application call to "notify" (defined at: ./index.rsh:40:13:function exp)', 'at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v166) {
    const v328 = v191;
    const v329 = false;
    const v330 = v196;
    const v331 = v193;
    const v333 = stdlib.le(v168, v164);
    if (v333) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v334 = v191;
    const v335 = false;
    const v336 = v196;
    const v337 = v193;
    const v339 = stdlib.le(v168, v164);
    if (v339) {
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
  
  
  const v144 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:20:73:application',
    fs: ['at ./index.rsh:19:17:application call to [unknown function] (defined at: ./index.rsh:19:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v145 = v144.nftId;
  const v146 = v144.minBid;
  const v147 = v144.lenInBlocks;
  
  const txn1 = await (ctc.sendrecv({
    args: [v145, v146, v147],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v149, v150, v151], secs: v153, time: v152, didSend: v33, from: v148 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v149
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:23:13:decimal', stdlib.UInt_max, 0),
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
  const {data: [v149, v150, v151], secs: v153, time: v152, didSend: v33, from: v148 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v148, v149, v150, v151, v152],
    evt_cnt: 0,
    funcNum: 1,
    lct: v152,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:13:dot', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, 1), v149]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v157, time: v156, didSend: v41, from: v155 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:26:13:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, 1),
        kind: 'to',
        tok: v149
        });
      const v161 = stdlib.addressEq(v148, v155);
      stdlib.assert(v161, {
        at: './index.rsh:26:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      
      const v164 = stdlib.add(v152, v151);
      const v165 = v148;
      const v166 = true;
      const v167 = v150;
      const v168 = v156;
      const v169 = v152;
      
      if (await (async () => {
        const v183 = stdlib.le(v169, v164);
        
        return v183;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:24:17:decimal', stdlib.UInt_max, 1),
          kind: 'from',
          to: v165,
          tok: v149
          });
        if (v166) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v149
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v167,
            kind: 'from',
            to: v148,
            tok: undefined
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v149
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
  const {data: [], secs: v157, time: v156, didSend: v41, from: v155 } = txn2;
  ;
  ;
  const v161 = stdlib.addressEq(v148, v155);
  stdlib.assert(v161, {
    at: './index.rsh:26:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:27:34:application call to "liftedInteract" (defined at: ./index.rsh:27:34:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v164 = stdlib.add(v152, v151);
  let v165 = v148;
  let v166 = true;
  let v167 = v150;
  let v168 = v156;
  let v169 = v152;
  
  while (await (async () => {
    const v183 = stdlib.le(v169, v164);
    
    return v183;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v192], secs: v194, time: v193, didSend: v93, from: v191 } = txn3;
    const v196 = v192[stdlib.checkedBigNumberify('./index.rsh:37:13:spread', stdlib.UInt_max, 0)];
    ;
    undefined;
    const v200 = [v165, v167];
    await txn3.getOutput('Bidder_bid', 'v200', ctc6, v200);
    if (v166) {
      stdlib.protect(ctc3, await interact.seeBid(v191, v196), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:47:40:application call to "liftedInteract" (defined at: ./index.rsh:47:40:application)', 'at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
        msg: 'seeBid',
        who: 'Creator'
        });
      
      const cv165 = v191;
      const cv166 = false;
      const cv167 = v196;
      const cv168 = v193;
      const cv169 = v168;
      
      v165 = cv165;
      v166 = cv166;
      v167 = cv167;
      v168 = cv168;
      v169 = cv169;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc3, await interact.seeBid(v191, v196), {
        at: './index.rsh:1:39:application',
        fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:47:40:application call to "liftedInteract" (defined at: ./index.rsh:47:40:application)', 'at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
        msg: 'seeBid',
        who: 'Creator'
        });
      
      const cv165 = v191;
      const cv166 = false;
      const cv167 = v196;
      const cv168 = v193;
      const cv169 = v168;
      
      v165 = cv165;
      v166 = cv166;
      v167 = cv167;
      v168 = cv168;
      v169 = cv169;
      
      continue;}
    
    }
  ;
  if (v166) {
    stdlib.protect(ctc3, await interact.showOutcome(v165, v167), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:54:37:application call to "liftedInteract" (defined at: ./index.rsh:54:37:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v165, v167), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:54:37:application call to "liftedInteract" (defined at: ./index.rsh:54:37:application)'],
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
  appApproval: `BSAJAAEEBQgDICigjQYmAgEAACI1ADEYQQNXKWRJIls1ASEEWzUCNhoAF0lBABYiNQQjNQaBoJu8gQESRDYaATUFQgAhNhoBFzYaAhc1BDYaAzUFSYECDEAA2kkhBQxAANIhBRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEGWzX+NAMhB1s1/TQDVzAgNfw0A4FRWzX7NAOBWVs1+jQFNfmABNeQtN00+VCwNPkXNfg0+ElBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREiACAAAAAAAAADINPw0+xZQULA0/DT7FlA1BzQDV1ABF0EAEjT/NP40/TEAIjT4MgY0+kIBYzT7SUEADLGyCCOyEDT8sgezIkg0/zT+NP0xACI0+DIGNPpCAT5ISSMMQAB8SCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMhBls1/jQDgThbNf2ABJqLkXSwI0lBACU0AEkjCDUATEsBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT/MQASRDT/NP40/TQDgTBbCDT/IzQDIQdbMgY0/UIAu0giNAESRDQESSISTDQCEhFENAUiWzX/NAUhBFs1/jQFgRBbNf2ABPdxE000/xZQNP4WUDT9FlCwIQhJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIQhJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIIrGyEiSyEDIKshQ0/7IRsyJIMQA0/xZQNP4WUDT9FlAyBhZQKEsBVwBAZ0gjNQEyBjUCMRkiEkRCANk1/zX+Nf01/DX7Nfo1+TX4NP80+g5BADM0+DT5FlA0+hZQNPtQNPwWUQcIUDT9FlA0/hZQKEsBVwBhZ0glNQEyBjUCMRkiEkRCAI4jSUEAELGyEiSyEDT7shQ0+bIRsyJINPxBADAisbISJLIQMgmyFTIKshQ0+bIRsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRklEkRCAEM0/UlBAAyxsggjshA0+LIHsyJIIrGyEiSyEDIJshUyCrIUNPmyEbMiSCKxsggjshAyCbIJMgqyB7MiSDEZJRJEQgAAKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
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
                "name": "v149",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
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
                "name": "v149",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
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
                "name": "v192",
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
    "name": "_reach_oe_v200",
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
                "name": "v192",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013f5380380620013f5833981016040819052620000269162000282565b6000805543600355604080518251815260208084015180516001600160a01b0316828401529081015182840152820151606082015290517f09dcf99bab8403f2ad96a278879a2e333122fff3ae5cb4798f3c3ab7f7b0fece9181900360800190a162000095341560076200017b565b620000da6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c09093019052815162000172926002920190620001a5565b5050506200036b565b81620001a15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b3906200032e565b90600052602060002090601f016020900481019282620001d7576000855562000222565b82601f10620001f257805160ff191683800117855562000222565b8280016001018555821562000222579182015b828111156200022257825182559160200191906001019062000205565b506200023092915062000234565b5090565b5b8082111562000230576000815560010162000235565b604051606081016001600160401b03811182821017156200027c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029657600080fd5b604080519081016001600160401b0381118282101715620002c757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002e157600080fd5b620002eb6200024b565b60208501519092506001600160a01b03811681146200030957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034357607f821691505b602082108114156200036557634e487b7160e01b600052602260045260246000fd5b50919050565b61107a806200037b6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc146100835780632c10a1591461009657806383230757146100a9578063ab53f2c6146100be578063b6279224146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610cbd565b610118565b61005d6100a4366004610cbd565b61014e565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d3610180565b60405161007a929190610d05565b6100f46100ef366004610d3f565b61021d565b6040805182516001600160a01b03168152602092830151928101929092520161007a565b604080516060810182526000602082018181529282015290815261014a61014436849003840184610dc0565b82610282565b5050565b604080516060810182526000602082018181529282015290815261014a61017a36849003840184610e25565b82610571565b60006060600054600280805461019590610e5d565b80601f01602080910402602001604051908101604052809291908181526020018280546101c190610e5d565b801561020e5780601f106101e35761010080835404028352916020019161020e565b820191906000526020600020905b8154815290600101906020018083116101f157829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610251604080516060810182526000602082018181529282015290815290565b610259610b54565b604080518082019091526020808201868152825282015261027a8183610282565b505192915050565b610292600560005414600e61074b565b81516102ad9015806102a657508251600154145b600f61074b565b6000808055600280546102bf90610e5d565b80601f01602080910402602001604051908101604052809291908181526020018280546102eb90610e5d565b80156103385780601f1061030d57610100808354040283529160200191610338565b820191906000526020600020905b81548152906001019060200180831161031b57829003601f168201915b50505050508060200190518101906103509190610eae565b9050610372604080516060810182526000602082018181529282015290815290565b60408051855181526020808701515151908201527f3097a001c4c75b01a2a0df409ab34fe1576e7fa0902510c53c83db8ce4b686d2910160405180910390a1602084015151516103c5903414600d61074b565b606082015181516001600160a01b03909116905260a082015181516020015280516040517f97386506becfb44e0ffe37186ef728150c8361a7f319434b9e346375be28952f9161042f9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a1805183526080820151156104b95761044d610b81565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526104b381610771565b5061056b565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f193505050501580156104fa573d6000803e3d6000fd5b50610503610b81565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c084015190516080015261056981610771565b505b50505050565b610581600160005414600b61074b565b815161059c90158061059557508251600154145b600c61074b565b6000808055600280546105ae90610e5d565b80601f01602080910402602001604051908101604052809291908181526020018280546105da90610e5d565b80156106275780601f106105fc57610100808354040283529160200191610627565b820191906000526020600020905b81548152906001019060200180831161060a57829003601f168201915b505050505080602001905181019061063f9190610f5b565b60408051855181526020808701511515908201529192507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a161068d3415600861074b565b6106a76106a0338360200151600161093d565b600961074b565b80516106bf906001600160a01b03163314600a61074b565b6106c7610b81565b815181516001600160a01b03918216905260208084015183519216910152606082015160808301516106f99190610fe5565b81516040908101919091528251602080840180516001600160a01b0390931690925281516001910152838201518151909201919091528051436060909101526080808401519151015261056b81610771565b8161014a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b805160400151602082015160800151116108a0576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e0820152610100016040516020818303038152906040526002908051906020019061089b929190610bd6565b505050565b6108bc8160000151602001518260200151600001516001610955565b806020015160200151156108e357600080805560018190556108e090600290610c5a565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610926573d6000803e3d6000fd5b50600080805560018190556108e090600290610c5a565b600061094b83853085610969565b90505b9392505050565b610960838383610a43565b61089b57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916109d09161100b565b60006040518083038185875af1925050503d8060008114610a0d576040519150601f19603f3d011682016040523d82523d6000602084013e610a12565b606091505b5091509150610a2382826001610b14565b5080806020019051810190610a389190611027565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610aa29161100b565b60006040518083038185875af1925050503d8060008114610adf576040519150601f19603f3d011682016040523d82523d6000602084013e610ae4565b606091505b5091509150610af582826002610b14565b5080806020019051810190610b0a9190611027565b9695505050505050565b60608315610b2357508161094e565b825115610b335782518084602001fd5b60405163100960cb60e01b815260048101839052602401610768565b905290565b604051806040016040528060008152602001610b4f60408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610be290610e5d565b90600052602060002090601f016020900481019282610c045760008555610c4a565b82601f10610c1d57805160ff1916838001178555610c4a565b82800160010185558215610c4a579182015b82811115610c4a578251825591602001919060010190610c2f565b50610c56929150610c90565b5090565b508054610c6690610e5d565b6000825580601f10610c76575050565b601f0160209004906000526020600020908101906108e091905b5b80821115610c565760008155600101610c91565b600060408284031215610cb757600080fd5b50919050565b600060408284031215610ccf57600080fd5b61094e8383610ca5565b60005b83811015610cf4578181015183820152602001610cdc565b8381111561056b5750506000910152565b8281526040602082015260008251806040840152610d2a816060850160208701610cd9565b601f01601f1916919091016060019392505050565b600060208284031215610d5157600080fd5b5035919050565b6040805190810167ffffffffffffffff81118282101715610d8957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610d8957634e487b7160e01b600052604160045260246000fd5b60008183036040811215610dd357600080fd5b610ddb610d58565b833581526020601f1983011215610df157600080fd5b610df9610d8f565b9150610e03610d8f565b602094850135815282529283015250919050565b80151581146108e057600080fd5b600060408284031215610e3757600080fd5b610e3f610d58565b823581526020830135610e5181610e17565b60208201529392505050565b600181811c90821680610e7157607f821691505b60208210811415610cb757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ea957600080fd5b919050565b600060e08284031215610ec057600080fd5b60405160e0810181811067ffffffffffffffff82111715610ef157634e487b7160e01b600052604160045260246000fd5b604052610efd83610e92565b8152610f0b60208401610e92565b602082015260408301516040820152610f2660608401610e92565b60608201526080830151610f3981610e17565b608082015260a0838101519082015260c0928301519281019290925250919050565b600060a08284031215610f6d57600080fd5b60405160a0810181811067ffffffffffffffff82111715610f9e57634e487b7160e01b600052604160045260246000fd5b604052610faa83610e92565b8152610fb860208401610e92565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000821982111561100657634e487b7160e01b600052601160045260246000fd5b500190565b6000825161101d818460208701610cd9565b9190910192915050565b60006020828403121561103957600080fd5b815161094e81610e1756fea2646970667358221220a481eec28407abcb344d19b405b90216bd5651ac687a75b75c93f88a57a6c93964736f6c63430008090033`,
  BytecodeLen: 5109,
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
