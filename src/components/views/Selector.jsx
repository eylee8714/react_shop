import React, { useState } from 'react';

/* 상품 or 공급업체 기능을 선택하는 컴포넌트 */
// 자식 컴포넌트를 위한 버튼을 렌더링하고, 사용자가 선택한 콘텐츠만 보여주는 컨테이너 컴포넌트이다.
function Selector(props) {
  const [selection, setSelection] = useState(
    React.Children.toArray(props.children)[0].props.name // 초기에 나오는 페이지 (0번째인 products 페이지로 설정했다.)
  );

  const handleSelection = (event) => {
    event.preventDefault();
    setSelection(event.target.name);
  };

  return (
    <div>
      {React.Children.map(props.children, (c) => (
        <button
          name={c.props.name}
          onClick={handleSelection}
          className={`${selection === c.props.name ? 'active' : ''}`}
        >
          {c.props.name}
        </button>
      ))}
      {React.Children.toArray(props.children).filter(
        (c) => c.props.name === selection
      )}
    </div>
  );
}

export default Selector;
