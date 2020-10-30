/**
 * author: fc1904
 * date: 2020/10/30 16:34:12
 * fileName: index.tsx
 * description: umi 的加载入口路由
 **/

import React from 'react';
import styles from './index.less';

// 组件
import components from '@components';

// 公共方法
import history from 'umi';

const { Base } = components;

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
