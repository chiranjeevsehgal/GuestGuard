import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Dialogue({email}) {
    const [open, setOpen] = React.useState(false);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setSubject("")
        setBody("")
        setOpen(false);
    };

    const handleSendEmail = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div stlye={{}}>
            <Button variant="outlined" color="primary"
                onClick={handleClickToOpen}>
                Send Alert
            </Button>
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Alert"}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        I am Good, Hope the same for you!
                    </DialogContentText> */}
                    <fieldset className="w-full space-y-1 text-gray-800">
                        <label for="url" className="block text-sm font-medium">Subject</label>
                        <div className="flex">
                            {/* <span className="flex items-center px-6 pointer-events-none sm:text-sm rounded-l-md bg-gray-300">Subject:</span> */}
                            <input type="text" name="url" id="url" placeholder="Subject" className="flex flex-1 border sm:text-md rounded-r-md focus:ri border-gray-300 text-gray-800 bg-gray-100 focus:ri h-12 w-64 p-4" value={subject} onChange={handleSubjectChange}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="w-full space-y-1 text-gray-800 mt-6">
                        <label for="url" className="block text-sm font-medium">Body</label>
                        <div className="flex">
                            {/* <span className="flex items-center px-8 pointer-events-none sm:text-sm rounded-l-md bg-gray-300">Body:</span> */}
                            <input type="text" name="url" id="url" placeholder="Body" className="flex flex-1 border sm:text-md rounded-r-md focus:ri border-gray-300 text-gray-800 bg-gray-100 focus:ri h-12 w-64 p-4" value={body}
                                onChange={handleBodyChange}
                            />
                        </div>
                    </fieldset>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                    <Button onClick={handleSendEmail}
                        color="primary" autoFocus>
                        Send Email
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
