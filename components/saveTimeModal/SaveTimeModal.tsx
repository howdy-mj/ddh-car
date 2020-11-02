import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const SaveTimeModal = () => {
  const [open, setOpen] = React.useState(false);
  const now = new Date();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        message={`${now} 임시저장 되었습니다.`}
      />
    </div>
  );
};

export default SaveTimeModal;
