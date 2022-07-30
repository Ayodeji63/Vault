// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

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
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v74 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v74],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v74, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v29, from: v77 } = txn1;
      
      sim_r.txns.push({
        amt: v78,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v29, from: v77 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v38, from: v86 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:3:20:decimal', stdlib.UInt_max, '30')), {
    at: './index.rsh:38:27:application',
    fs: ['at ./index.rsh:37:7:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'showCountDown',
    who: 'Alice'
    });
  
  const v96 = stdlib.protect(ctc1, await interact.getAction(), {
    at: './index.rsh:42:48:application',
    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:13:function exp)'],
    msg: 'getAction',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v77, v78, v86, v96],
    evt_cnt: 1,
    funcNum: 2,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v54, from: v97 } = txn3;
      
      ;
      if (v98) {
        sim_r.txns.push({
          kind: 'from',
          to: v77,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v86,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v54, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v77, v97);
  stdlib.assert(v101, {
    at: './index.rsh:44:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  if (v98) {
    ;
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v29, from: v77 } = txn1;
  ;
  const v85 = stdlib.protect(ctc1, await interact.boolTerms(v78), {
    at: './index.rsh:32:48:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:13:function exp)'],
    msg: 'boolTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v77, v78, v85],
    evt_cnt: 1,
    funcNum: 1,
    lct: v79,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v87], secs: v89, time: v88, didSend: v38, from: v86 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v38, from: v86 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.showCountDown(stdlib.checkedBigNumberify('./index.rsh:3:20:decimal', stdlib.UInt_max, '30')), {
    at: './index.rsh:38:27:application',
    fs: ['at ./index.rsh:37:7:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'showCountDown',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v54, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v77, v97);
  stdlib.assert(v101, {
    at: './index.rsh:44:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  if (v98) {
    ;
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAYMpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAC/SSQMQABqJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAEahE6CDT9FlEHCFCwNP8xABJENP1BABOxIrIBNP6yCCOyEDT/sgezQgCrsSKyATT+sggjshA0A1coILIHs0IAlUgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8lWzX+STUFFzX9gAQPv8Y0NP0WUQcIULA0/zT+FlAxAFAoSwFXAEhnSCQ1ATIGNQJCAGJIgaCNBogAqyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iACFMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
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
                "internalType": "uint256",
                "name": "v78",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "uint256",
                "name": "v78",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool",
                "name": "v87",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "internalType": "bool",
                "name": "v98",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "components": [
              {
                "internalType": "bool",
                "name": "v87",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "internalType": "bool",
                "name": "v98",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610ac4380380610ac4833981016040819052610022916101a8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515161008390341460076100e6565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100de926002929091019061010f565b505050610281565b8161010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011b90610246565b90600052602060002090601f01602090048101928261013d5760008555610183565b82601f1061015657805160ff1916838001178555610183565b82800160010185558215610183579182015b82811115610183578251825591602001919060010190610168565b5061018f929150610193565b5090565b5b8082111561018f5760008155600101610194565b60008183036040808212156101bc57600080fd5b80518082016001600160401b0380821183831017156101eb57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561020457600080fd5b83519450602085019150848210818311171561023057634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025a57607f821691505b6020821081141561027b57634e487b7160e01b600052602260045260246000fd5b50919050565b610834806102906000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac414610078578063832307571461008b5780639a3e3912146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105f2565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105f2565b6102b0565b3480156100bf57600080fd5b506100c8610442565b60405161006f929190610615565b6100e6600260005414600d6104df565b610100813515806100f957506001548235145b600e6104df565b60008080556002805461011290610672565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610672565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906106c3565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33836040516101d6929190610761565b60405180910390a16101ea3415600b6104df565b8051610202906001600160a01b03163314600c6104df565b610212604083016020840161077e565b1561026f57805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610254573d6000803e3d6000fd5b506000808055600181905561026b90600290610504565b5050565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610254573d6000803e3d6000fd5b6102c060016000541460096104df565b6102da813515806102d357506001548235145b600a6104df565b6000808055600280546102ec90610672565b80601f016020809104026020016040519081016040528092919081815260200182805461031890610672565b80156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b505050505080602001905181019061037d9190610799565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516103b0929190610761565b60405180910390a16103c4341560086104df565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002958690554360015588518086019190915292518389015290511681850152855180820390940184526080019094528151929361043c9391920190610541565b50505050565b60006060600054600280805461045790610672565b80601f016020809104026020016040519081016040528092919081815260200182805461048390610672565b80156104d05780601f106104a5576101008083540402835291602001916104d0565b820191906000526020600020905b8154815290600101906020018083116104b357829003601f168201915b50505050509050915091509091565b8161026b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461051090610672565b6000825580601f10610520575050565b601f01602090049060005260206000209081019061053e91906105c5565b50565b82805461054d90610672565b90600052602060002090601f01602090048101928261056f57600085556105b5565b82601f1061058857805160ff19168380011785556105b5565b828001600101855582156105b5579182015b828111156105b557825182559160200191906001019061059a565b506105c19291506105c5565b5090565b5b808211156105c157600081556001016105c6565b6000604082840312156105ec57600080fd5b50919050565b60006040828403121561060457600080fd5b61060e83836105da565b9392505050565b82815260006020604081840152835180604085015260005b818110156106495785810183015185820160600152820161062d565b8181111561065b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061068657607f821691505b602082108114156105ec57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146106be57600080fd5b919050565b6000606082840312156106d557600080fd5b6040516060810181811067ffffffffffffffff8211171561070657634e487b7160e01b600052604160045260246000fd5b604052610712836106a7565b81526020830151602082015261072a604084016106a7565b60408201529392505050565b803580151581146106be57600080fd5b8035825261075660208201610736565b151560208301525050565b6001600160a01b03831681526060810161060e6020830184610746565b60006020828403121561079057600080fd5b61060e82610736565b6000604082840312156107ab57600080fd5b6040516040810181811067ffffffffffffffff821117156107dc57634e487b7160e01b600052604160045260246000fd5b6040526107e8836106a7565b815260208301516020820152809150509291505056fea26469706673582212207a411e874983f08e41a32c7e2e530cd906b4445edc561dd30a75607e78bd388a64736f6c634300080c0033`,
  BytecodeLen: 2756,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:48:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
