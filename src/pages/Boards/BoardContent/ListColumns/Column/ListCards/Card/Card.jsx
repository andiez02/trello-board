import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card = ({ card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card._id,
    data: { ...card },
  });
  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    // touchAction: "none",
    opacity: isDragging ? 0.6 : undefined,
    border: isDragging ? "1px solid #2ecc71" : "",
  };

  const shouldShowCardActions = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };

  return (
    <div>
      <MuiCard
        ref={setNodeRef}
        style={dndKitCardStyles}
        {...attributes}
        {...listeners}
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          overflow: "unset",
          display: card?.FE_PlaceholderCard ? "none" : "block",
        }}
      >
        {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>{card?.title}</Typography>
        </CardContent>

        {shouldShowCardActions && (
          <CardActions
            sx={{
              p: "0 4px ",
            }}
          >
            {!!card?.memberIds?.length && (
              <Button size="small" startIcon={<GroupIcon />}>
                {card.memberIds.length}
              </Button>
            )}
            {!!card?.comments?.length && (
              <Button size="small" startIcon={<CommentIcon />}>
                {card.comments.length}
              </Button>
            )}
            {!!card?.attachments?.length && (
              <Button size="small" startIcon={<AttachmentIcon />}>
                {card.attachments.length}
              </Button>
            )}
          </CardActions>
        )}
      </MuiCard>
    </div>
  );
};

export default Card;
