/**
 * Created by kelvinsun on 2015/10/23.
 */
define(['jquery'], function ($) {
    var EventDom = $('<script>');
    /**
     * �¼���
     * @param events    �¼���
     * @param handler   �¼�������
     * @param namespace �����ռ�, ��ֹ��ɾ��
     */
    function on (events, handler, namespace) {
        EventDom.on(events, function () {
            var args = Array.prototype.slice.call(arguments),
                eventType = args.shift();
            args.push(eventType);
            handler && handler.apply(null, args);
        });
    }
    /**
     * �¼�����
     * @param events    �¼���
     */
    function emit (events) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        EventDom.trigger(events, args);
    }
    /**
     * �¼����
     * @param events    �¼���
     * @param namespace �����ռ�, ��ֹ��ɾ��
     */
    function off (events, namespace) {
        EventDom.off(events);
    }

    return {
        on: on,
        off: off,
        emit: emit
    };
});
