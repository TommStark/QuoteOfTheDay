import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Skeleton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Tooltip from '@mui/material/Tooltip';

export default function DailyCard(props) {
    const { quote, onClickRandomQuote, onClickSpeechHandler,randomValue,isLoading } = props

    return (
    <Box sx={{ maxWidth: 440, minWidth:440 }}>
        {
            isLoading
            ?
            <Skeleton
                animation="wave"
                width={440}
                height={480}
                sx={{borderRadius:4}}
            />
            :
            <Card variant="outlined" sx={{borderRadius:4}}>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                        Arzion quote #{randomValue+2}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {quote.Fecha}
                        </Typography>
                        <Typography variant="body2">
                        <FormatQuoteIcon sx={{  transform: 'rotate(180deg)'}}/>
                            {quote?.Frase}
                        <FormatQuoteIcon/>
                        </Typography>
                        <Typography variant="body2" sx={{mt: 2, mb: 1, display:'flex' ,justifyContent:'flex-end', fontStyle: 'italic'}}>
                            __ {quote?.Autor}
                        </Typography>
                    </CardContent>
                    <Divider/>
                    <CardActions sx={{ height:'10vh',display:'flex', justifyContent:'space-between'}}>
                        <Box>
                            <IconButton onClick={() => onClickSpeechHandler(quote?.Frase)} aria-label="share">
                                <VolumeUpIcon />
                            </IconButton>
                            <Tooltip title={quote.Contexto || 'No context'}>
                                <IconButton aria-label="add to favorites">
                                    <QuestionMarkIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box>
                            <Button variant="contained" size="small" onClick={onClickRandomQuote} >New Quote</Button>
                        </Box>
                    </CardActions>
                </React.Fragment>
            </Card>

        }
    </Box>
);
}