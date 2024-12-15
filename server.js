import { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import session from "express-session"
import bodyParser from "body-parser"
import cors from 'cors'
import { zkSyncClean, zkSyncData, zkSyncFetchWallet } from "../checkers/zksync.js"
import { zoraClean, zoraData, zoraFetchWallet } from "../checkers/zora.js"
import { baseClean, baseData, baseFetchWallet } from "../checkers/base.js"
import { aptosClean, aptosData, aptosFetchWallet } from "../checkers/aptos.js"
import { lineaClean, lineaData, lineaFetchWallet } from "../checkers/linea.js"
import { scrollClean, scrollData, scrollFetchWallet } from "../checkers/scroll.js"
import { balancesData } from "../checkers/balances.js"
import { evmData } from "../checkers/evm.js"
import { readWallets } from "./common.js"
import { layerzeroClean, layerzeroData, layerzeroFetchWallet } from "../checkers/layerzero.js"
import { wormholeClean, wormholeData, wormholeFetchWallet } from '../checkers/wormhole.js'
import { zkbridgeClean, zkbridgeData, zkbridgeFetchWallet } from '../checkers/zkbridge.js'
import { hyperlaneClean, hyperlaneData, hyperlaneFetchWallet } from '../checkers/hyperlane.js'
import { clustersClean, clustersData, clustersFetchWallet } from '../checkers/clusters.js'
import { debridgeClean, debridgeData, debridgeFetchWallet } from '../checkers/debridge.js'
import { config } from '../user_data/config.js'
import { chainFetchData, rabbyClean, rabbyData, rabbyFetchWallet } from '../checkers/rabby.js'
import { nftClean, nftData, nftFetchWallet } from '../checkers/nft.js'
import { galxeData } from '../checkers/galxe.js'
import { polygonzkevmClean, polygonzkevmData, polygonzkevmFetchWallet } from '../checkers/polygonzkevm.js'
import { jumperClean, jumperData, jumperFetchWallet } from '../checkers/jumper.js'
import { storyClean, storyData, storyFetchWallet } from '../checkers/story.js'
import { eclipseClean, eclipseData, eclipseFetchWallet } from '../checkers/eclipse.js'
