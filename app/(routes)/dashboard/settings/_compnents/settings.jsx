import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import NewUser from "./newuser"

const settings = () => {
    return (
        <Accordion collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Add New Retailer</AccordionTrigger>
            <AccordionContent>
                <NewUser />
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    )
}

export default settings