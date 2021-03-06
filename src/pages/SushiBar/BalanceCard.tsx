import { BalanceProps } from '../../hooks/useTokenBalance'
import React from 'react'
import SushiImage from '../../assets/images/token-list/kuku.png'
import xKUKUImage from '../../assets/images/token-list/xKUKU.png'
import KCSImage from '../../assets/images/token-list/kcc-logo.png'
import { formatFromBalance } from '../../utils'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import { BigNumber } from '@ethersproject/bignumber'
interface BalanceCardProps {
    sushiEarnings?: number
    xKUKUBalance: BalanceProps
    sushiBalance: BalanceProps
    weightedApr?: number
}

export default function BalanceCard({
    xKUKUBalance,
    sushiBalance,
    sushiEarnings = 0,
    weightedApr = 0
}: BalanceCardProps) {
    const { i18n } = useLingui()
    const { account } = useActiveWeb3React()
    return (
        <div className="flex flex-col w-full bg-dark-900 border-yellow rounded px-4 md:px-8 pt-6 pb-5 md:pt-7 md:pb-9">
            <div className="flex flex-wrap">
                <div className="flex flex-col flex-grow md:mb-5">
                    <p className="mb-3 text-lg font-bold md:text-h5 md:font-medium text-high-emphesis">
                        {i18n._(t`Rewards`)}
                    </p>
                    <div className="flex items-center">
                        <img className="w-10 pr-1 md:w-16  mr-1 md:mr-2 -mb-1.5" src={KCSImage} alt="sushi" />
                        <div className="flex flex-col justify-center">
                            <p className="text-caption2 md:text-lg font-bold text-high-emphesis">
                                {formatFromBalance(BigNumber.from('250000000000000000'))}
                            </p>
                            <p className="text-caption2 md:text-caption text-primary">WKCS</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-grow md:mb-5">
                    <p className="mb-3 text-lg font-bold md:text-h5 md:font-medium text-high-emphesis">
                        {i18n._(t`Balance`)}
                    </p>
                    <div className="flex items-center">
                        <img className="w-10 pr-1 md:w-16  mr-1 md:mr-2 -mb-1.5" src={xKUKUImage} alt="sushi" />
                        <div className="flex flex-col justify-center">
                            <p className="text-caption2 md:text-lg font-bold text-high-emphesis">
                                {formatFromBalance(xKUKUBalance.value)}
                            </p>
                            <p className="text-caption2 md:text-caption text-primary">xKUKU</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex flex-nowrap mb-3 ml-8 md:ml-0">
                        <p className="text-lg font-bold md:text-h5 md:font-medium text-high-emphesis">
                            {i18n._(t`Unstaked`)}
                        </p>
                        {/* <img className="cursor-pointer ml-2 w-4" src={MoreInfoSymbol} alt={'more info'} /> */}
                    </div>
                    <div className="flex items-center ml-8 md:ml-0">
                        <img className="w-10  pr-1 md:w-16  mr-1 md:mr-2 -mb-1.5" src={SushiImage} alt="sushi" />
                        <div className="flex flex-col justify-center">
                            <p className="text-caption2 md:text-lg font-bold text-high-emphesis">
                                {formatFromBalance(sushiBalance.value)}
                            </p>
                            <p className="text-caption2 md:text-caption text-primary">KUKU</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
