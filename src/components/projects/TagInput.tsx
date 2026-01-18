import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #1a1a1a;
  font-size: 16px;
  padding: 12px 0;
  font-family: inherit;
  outline: none;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const Tag = styled.span`
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    border-color: #bbb;
  }
`;

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const SuggestionTag = styled.span`
  background: #f0f0f0;
  color: #666;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4f46e5;
    color: white;
  }
`;

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
