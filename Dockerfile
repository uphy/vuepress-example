FROM golang:1.11 as builder

WORKDIR /go/src/github.com/uphy/vuepress-example/hello
COPY hello .
RUN go build -o /hello

FROM alpine:3.8

COPY --from=builder /hello /bin/
ENTRYPOINT [ "/bin/hello" ]