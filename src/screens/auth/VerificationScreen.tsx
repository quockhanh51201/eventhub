import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import ContainerComponents from '../../components/ContainerComponents'
import { ButtonComponents, RowComponents, SectionComponents, SpaceComponents, TextComponents } from '../../components'
import { appColor } from '../../constants/appColors'
import { appFontFamilies } from '../../constants/appFontFamilies'

const VerificationScreen = ({ navigation, route }: any) => {
    const { res, values } = route.params

    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();


    useEffect(() => {
        ref1.current.focus();
    }, [])

    return (
        <ContainerComponents back isImageBackground>
            <SectionComponents>
                <TextComponents
                    text='Verification'
                    title
                />
                <SpaceComponents height={12} />
                <TextComponents
                    text={`We've send you the verification code on ${values.email.replace(/.{1,5}/, (m: any) => '*'.repeat(m.length))}`}
                />
                <SpaceComponents height={40} />
                <RowComponents
                    justify='space-around'
                >
                    <TextInput
                        ref={ref1}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChange={(val) => {
                            val && ref2.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref2}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChange={(val) => {
                            val && ref3.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref3}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChange={(val) => {
                            val && ref4.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref4}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChange={(val) => {
                            console.log(val)
                        }}
                    />

                </RowComponents>
            </SectionComponents>
            <SpaceComponents height={40} />
            <SectionComponents>
                <ButtonComponents
                    disable
                    text='Continue'
                    type='primary'
                />
            </SectionComponents>
            <SpaceComponents height={24} />
            <SectionComponents>
                <RowComponents justify='center'>
                    <TextComponents text='Re-send code in ' />
                    <TextComponents text='00:22' color={appColor.link} />
                </RowComponents>
            </SectionComponents>
        </ContainerComponents>
    )
}

export default VerificationScreen


const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColor.gray2,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: appFontFamilies.bold
    }
})