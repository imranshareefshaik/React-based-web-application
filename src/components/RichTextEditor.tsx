import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Box,
  ButtonGroup,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from 'lucide-react';

const RichTextEditor = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable: true,
  });

  if (!editor) {
    return null;
  }

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
      <ButtonGroup spacing={2} mb={4}>
        <Tooltip label="Bold">
          <IconButton
            aria-label="Bold"
            icon={<Bold size={20} />}
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive('bold')}
          />
        </Tooltip>
        
        <Tooltip label="Italic">
          <IconButton
            aria-label="Italic"
            icon={<Italic size={20} />}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
          />
        </Tooltip>
        
        <Tooltip label="Bullet List">
          <IconButton
            aria-label="Bullet List"
            icon={<List size={20} />}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
          />
        </Tooltip>
        
        <Tooltip label="Ordered List">
          <IconButton
            aria-label="Ordered List"
            icon={<ListOrdered size={20} />}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
          />
        </Tooltip>
      </ButtonGroup>
      
      <EditorContent editor={editor} />
    </Box>
  );
};

export default RichTextEditor;