import { useState } from 'react';
import {
  Container,
  Label,
  Input,
  TagList,
  Tag,
  Suggestions,
  SuggestionTag,
} from '../../styles/components/projects/tagInputStyles';

interface TagInputProps {
  label: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  prefix?: string; // '#' for hashtags
  suggestions?: string[];
  maxTags?: number;
}

export default function TagInput({
  label,
  tags,
  onChange,
  placeholder = '태그 입력 후 Enter',
  prefix = '',
  suggestions = [],
  maxTags,
}: TagInputProps) {
  const [input, setInput] = useState('');

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (!trimmed) return;

    const finalTag = prefix + trimmed;

    // 중복 체크
    if (tags.includes(finalTag)) {
      setInput('');
      return;
    }

    // 최대 개수 체크
    if (maxTags && tags.length >= maxTags) {
      alert(`최대 ${maxTags}개까지 추가할 수 있습니다.`);
      return;
    }

    onChange([...tags, finalTag]);
    setInput('');
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(input);
    }
  };

  const addSuggestion = (suggestion: string) => {
    addTag(suggestion);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />

      {tags.length > 0 && (
        <TagList>
          {tags.map((tag) => (
            <Tag key={tag} onClick={() => removeTag(tag)}>
              {tag} ✕
            </Tag>
          ))}
        </TagList>
      )}

      {suggestions.length > 0 && tags.length < (maxTags || Infinity) && (
        <Suggestions>
          {suggestions
            .filter((s) => !tags.includes(prefix + s))
            .map((suggestion) => (
              <SuggestionTag
                key={suggestion}
                onClick={() => addSuggestion(suggestion)}
              >
                + {prefix}
                {suggestion}
              </SuggestionTag>
            ))}
        </Suggestions>
      )}
    </Container>
  );
}
