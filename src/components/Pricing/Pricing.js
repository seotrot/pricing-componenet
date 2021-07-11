import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Switch,
  Divider,
  Icon,
  Button,
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  checkicon: {
    color: '#15D4C8',
    paddingRight: 9,
  },
  btn: {
    background: '#293356',
    color: 'white',
    borderRadius: 20,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 10,

    '&:hover': {
      backgroundColor: '#15D4C8',
    },
  },
})

const Pricing = () => {
  const classes = useStyles()

  const [sliderValue, setSliderValue] = useState(20)
  const [billing, setBilling] = useState(false)

  return (
    <Box mt={10}>
      <Container>
        <Box mt={10}>
          <Typography variant='h3'>Research The Blog, Pricing</Typography>
        </Box>
        <Box mt={5}>
          <Paper elevation={5}>
            <Grid>
              <Grid item>
                <Box
                  display='flex'
                  justifyContent='space-around'
                  alignItems='center'
                  pt={5}
                  mt={25}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Typography variant='subtitle1'>
                    {!billing ? sliderValue : 10000} Credits
                  </Typography>
                  <Box
                    display={{ xs: 'flex', sm: 'none' }}
                    justifyContent='center'
                    width={500}
                    mt={1}
                    mb={1}
                  >
                    <StyledInput
                      value={sliderValue}
                      onChange={(e) => setSliderValue(e.target.value)}
                      type='range'
                      min='0'
                      max='100'
                      disabled={billing}
                    />
                  </Box>
                  <Typography variant='subtitle1'>
                    <span style={{ fontWeight: 700, fontSize: 28 }}>
                      {' '}
                      $
                      {billing === false
                        ? (sliderValue / 3).toFixed(2)
                        : (sliderValue * 10).toFixed(2)}
                    </span>
                    / Month
                  </Typography>
                </Box>
              </Grid>

              <Grid item>
                <Box
                  display={{ xs: 'none', sm: 'flex' }}
                  justifyContent='center'
                  mt={3}
                  mb={3}
                >
                  <StyledInput
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    type='range'
                    min='0'
                    max='100'
                    disabled={billing}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='flex-end'
                  mr={4}
                >
                  <Typography variant='subtitle2'>Monthly Billing</Typography>
                  <Switch
                    checked={billing}
                    onChange={(e) => setBilling(e.target.checked)}
                    color='primary'
                  />
                  <Typography variant='subtitle2'>Yearly Billing</Typography>
                  <Box mr={3} ml={3}>
                    <Typography
                      style={{
                        background: '#FFEDEA',
                        color: '#EBA693',

                        paddingLeft: 12,
                        paddingRight: 12,
                        borderRadius: 20,
                      }}
                      variant='subtitle1'
                    >
                      25% discount
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Divider />
              <Grid item>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-around'
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyItems='center'
                    pl={3}
                    pt={4}
                    pb={4}
                  >
                    <Box display='flex' alignItems='center' pb={1}>
                      <CheckIcon
                        className={classes.checkicon}
                        fontSize='small'
                      />
                      <Typography variant='subtitle2'>
                        Unlimited websites
                      </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' pb={1}>
                      <CheckIcon
                        className={classes.checkicon}
                        color='#15D4C8'
                        fontSize='small'
                      />

                      <Typography variant='subtitle2'>
                        100% data ownership
                      </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' pb={1}>
                      <CheckIcon
                        className={classes.checkicon}
                        fontSize='small'
                      />

                      <Typography variant='subtitle2'>Email reports</Typography>
                    </Box>
                  </Box>
                  <Button className={classes.btn}>Start my trial</Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

export default Pricing

const StyledInput = styled.input`
  -webkit-appearance: none;
  margin: 18px 0;
  width: 70%;

  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #beede6;
    border-radius: 10px;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    background: url('images/icon-slider.svg') center/contain no-repeat
        content-box,
      #15d4c8;
    z-index: 1;
    width: 40px;
    position: relative;
    height: 40px;
    padding: 5px; /* Offset the background image from the edges */
    margin-top: -16px;
  }
  :focus::-webkit-slider-runnable-track {
    background: #beede6;
  }
  ::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #beede6;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    /* border: 1px solid #000000; */
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: #3071a9;
  }
  :focus::-ms-fill-upper {
    background: #367ebd;
  }
`
