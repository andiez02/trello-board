import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "~/utils/formatter";

const MENU_STYLE = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box px={2} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
            onClick={() => {}}
          />
        </Tooltip>

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          onClick={() => {}}
        />
      </Box>

      <Box px={2} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
          <Tooltip title="andiez">
            <Avatar
              alt="andiez"
              src="https://i.pinimg.com/1200x/d9/97/43/d997433146fa1254ceef9398698c0a3d.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
