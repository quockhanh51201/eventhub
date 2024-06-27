import { ArrowCircleRight2, Lock, Sms } from 'iconsax-react-native'
import React, { useEffect, useState } from 'react'
import { Image, Switch } from 'react-native'
import { IMAGES } from '../../assets/image'
import { ButtonComponents, RowComponents, SectionComponents, SpaceComponents, TextComponents, TextInputComponents } from '../../components'
import ContainerComponents from '../../components/ContainerComponents'
import { appColor } from '../../constants/appColors'
import SocialLogin from './components/SocialLogin'
import authenticationAPI from '../../api/authApi'
import { Validate } from '../../utils/validate'
import showToastMsg from '../../utils'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'
import { LoadingModal } from '../../Modals'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('quockhanh51201@gmail.com')
  const [pass, setPass] = useState('245062')
  const [isRemember, setIsRemember] = useState(true)
  const [isLoadding, setIsLoadding] = useState(false)
  const [isDisable, setIsDisable] = useState(true)
  const { getItem } = useAsyncStorage(appStorage.useEmail)
  const dispatch = useDispatch()

  // ===============
  useEffect(() => {
    email && pass ? setIsDisable(false) : setIsDisable(true)
  }, [email, pass])
  const handleLogin = async () => {
    const emailValidate = Validate.Email(email)
    if (!emailValidate) {
      showToastMsg({
        message: 'Nhập sai định dạng email!',
        type: 'danger',
        icon: 'warning'
      })
      return
    }
    setIsLoadding(true)
    try {
      const res = await authenticationAPI.HandleAuthantication(
        '/login',
        {
          email,
          pass,
        },
        'post'
      )
      dispatch(addAuth(res.data))
      if (isRemember) {
        asyncStorage.addStorage(appStorage.token, res.data.accessToken)
        asyncStorage.addStorage(appStorage.useID, res.data.id)
        asyncStorage.addStorage(appStorage.useEmail, res.data.email)
      } else {
        asyncStorage.addStorage(appStorage.useEmail, res.data.email)
      }
      setIsLoadding(false)
      console.log(res)
    } catch (error) {
      console.log(error)
      setIsLoadding(false)
    }
  }

  // ===============

  return (
    <ContainerComponents isImageBackground isScroll>
      {/* Logo */}
      <SpaceComponents height={31} />
      <SectionComponents styles={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={IMAGES.Logo} style={[{ width: 162, height: 114 }]} resizeMode='cover' />
      </SectionComponents>

      <SpaceComponents height={30} />

      <SectionComponents >
        <TextComponents text='Sign in' size={24} title />
        <SpaceComponents height={21} />
        <TextInputComponents
          value={email}
          onChange={val => setEmail(val)}
          placeHolder='abc@gmail.com'
          affix={
            <Sms size={22} color={appColor.gray} />
          }
          allowClear
          keyboardType='email-address'
        />
        <SpaceComponents height={19} />
        <TextInputComponents
          value={pass}
          onChange={val => setPass(val)}
          placeHolder='Your Password'
          isPassword
          affix={
            <Lock size={22} color={appColor.gray} />
          }
        />
      </SectionComponents>

      <SpaceComponents height={20} />

      <SectionComponents>
        <RowComponents justify='space-between'>
          <RowComponents onpress={() => setIsRemember(!isRemember)}>
            <Switch value={isRemember} onChange={() => setIsRemember(!isRemember)} thumbColor={appColor.white} trackColor={{ true: appColor.primary, false: appColor.gray }} />
            <TextComponents text='Remember Me' />
          </RowComponents>
          <ButtonComponents
            text='Forgot Password ?'
            onpress={() => navigation.navigate('ForgotPasswordScreen')}
            type='text'
          />
        </RowComponents>
      </SectionComponents>

      <SpaceComponents height={36} />

      <SectionComponents styles={{ paddingHorizontal: 48 }}>
        <ButtonComponents
          text='SIGN IN'
          type='primary'
          icon={
            <ArrowCircleRight2
              size="22"
              color={appColor.white}
              variant="TwoTone"
            />
          }
          iconFlex='right'
          disable={isDisable}
          onpress={() => handleLogin()}
        />
      </SectionComponents>

      <SpaceComponents height={24} />

      <SocialLogin />

      <SpaceComponents height={20} />

      <SectionComponents>
        <RowComponents
          justify='center'
        >
          <TextComponents
            text="Don't have an account ?"
          />
          <SpaceComponents width={2} />
          <ButtonComponents
            text='Sign Up'
            type='link'
            onpress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponents>
      </SectionComponents>
      <LoadingModal visible={isLoadding} />
    </ContainerComponents>
  )
}

export default LoginScreen