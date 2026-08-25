const syncAttributes = (currentElement, nextElement) => {
  Array.from(currentElement.attributes).forEach(({ name }) => {
    if (!nextElement.hasAttribute(name)) {
      currentElement.removeAttribute(name);
    }
  });

  Array.from(nextElement.attributes).forEach(({ name, value }) => {
    if (currentElement.getAttribute(name) !== value) {
      currentElement.setAttribute(name, value);
    }
  });
};

const syncNode = (currentNode, nextNode) => {
  if (
    currentNode.nodeType !== nextNode.nodeType ||
    currentNode.nodeName !== nextNode.nodeName
  ) {
    currentNode.replaceWith(nextNode.cloneNode(true));
    return;
  }

  if (currentNode.nodeType === Node.TEXT_NODE) {
    if (currentNode.nodeValue !== nextNode.nodeValue) {
      currentNode.nodeValue = nextNode.nodeValue;
    }
    return;
  }

  if (currentNode.nodeType === Node.ELEMENT_NODE) {
    syncAttributes(currentNode, nextNode);
  }

  syncChildren(currentNode, nextNode);
};

const syncChildren = (currentParent, nextParent) => {
  let index = 0;

  while (index < currentParent.childNodes.length || index < nextParent.childNodes.length) {
    const currentNode = currentParent.childNodes[index];
    const nextNode = nextParent.childNodes[index];

    if (!currentNode) {
      currentParent.appendChild(nextNode.cloneNode(true));
    } else if (!nextNode) {
      currentNode.remove();
      continue;
    } else {
      syncNode(currentNode, nextNode);
    }

    index += 1;
  }
};

const updatePreviewDom = (container, html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  syncChildren(container, template.content);
};

export default updatePreviewDom;
