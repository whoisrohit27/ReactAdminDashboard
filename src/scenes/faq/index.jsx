import { Box, useTheme, Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ =()=>{
    const theme= useTheme();
    const colors = tokens(theme.palette.mode);

    return(
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Question"/>

        <Accordion defaultExpanded>
            <AccordionSummary expandicon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    An Important Question
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, explicabo rem facilis minima quos, eum corrupti nam recusandae in, iste quas vel minus voluptatibus quia expedita voluptas. Facere earum similique nihil unde cum doloribus dolorem?
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandicon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    Another Important Question
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum alias facilis, corporis explicabo vel minima nihil in omnis esse, maxime ducimus quasi natus ipsum atque perspiciatis a?
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandicon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                    Your favorite Question
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, fugit. Eveniet aliquam tempore, optio dolorum laboriosam velit ab incidunt nisi laudantium soluta ullam facere placeat nesciunt illo? Quasi, id pariatur.
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandicon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} varient="h5">
                  Random Question
                </Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum dicta cum temporibus beatae, odio ipsum nisi. Nulla qui adipisci mollitia ab rerum tempora aliquid nihil earum id perferendis magni maiores velit architecto suscipit, laboriosam quisquam?
                </Typography>
            </AccordionDetails>
        </Accordion>
    
    </Box>
    );

}   

export default FAQ;