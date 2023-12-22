'use client';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IosShareIcon from '@mui/icons-material/IosShare';
import SourceIcon from '@mui/icons-material/Source';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MouseEvent, useState } from "react";
export default function Projects({ projectsList }: { projectsList: any }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button variant="outlined" startIcon={<SourceIcon />} className="text-sky-200 mr-2" onClick={handleClick}>
        项目
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <AddCircleIcon />
          创建项目
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        {projectsList?.map((obj: any) => (
            <MenuItem onClick={handleClose} disableRipple key={obj.objectId} >
              <div className="w-300 pr-20">
                <div className="font-bold">仿真项目{obj.objectId}</div>
                <div className='text-slate-500 pl-1'>仿真项目{obj.field1}</div>
              </div>
              <div>
                <IconButton aria-label="导出" color="primary">
                  <IosShareIcon />
                </IconButton>
                <IconButton aria-label="删除" color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
              <Divider sx={{ my: 0.5 }} />
            </MenuItem>
        )
        )}
      </Menu>
    </div>
  )
}
